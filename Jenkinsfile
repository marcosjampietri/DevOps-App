#!/usr/bin/env groovy

def gv

pipeline {
    agent any
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
        booleanParam(name: 'executeTests', defaultValue: true, description: '')
    }
    stages {
        stage("init") {
            steps {
                script {
                   gv = load "script.groovy"
                }
            }
        }
        stage("test") {
            when {
                expression {
                    params.executeTests
                }
            }
            steps {
                script {
                    gv.testApp()
                }
            }
        }
        stage("build") {
            steps {
                script {
                    gv.buildImage()
                }
            }
        }
        stage('provision server') {
            environment {
                AWS_ACCESS_KEY_ID = credentials('jenkins_aws_access_key_id')
                AWS_SECRET_ACCESS_KEY = credentials('jenkins_aws_secret_access_key')
            }
            steps {
                script {
                   echo 'provisioning server on AWS'
                   dir('terraform') {
                       sh "cd terraform"
                       sh "terraform init"
                       sh "terraform apply --auto-approve"
                       EC2_IP = sh(
                           script: "terraform output ec2_public_ip"
                           returnStdout: true
                       ).trim()
                       sh "cd .."
                   }
                }
            }
        }
        stage('deploy') {
            environment {
                DOCKER_CRED = credentials('docker_credentials')
            }
            steps {
                script {
                   echo 'deploying docker image to EC2...'
                   def shellCmd = "bash ./server-cmds.sh ${IMAGE_NAME} ${DOCKER_CRED_URS} ${DOCKER_CRED_PSW}"
                   def ec2Instance = "ec2-user@${EC2_IP}"
                   sshagent(['ec2-server-key']) {
                       sh "scp server-cmds.sh ${ec2Instance}:/home/ec2-user"
                       sh "scp docker-compose.yaml ${ec2Instance}:/home/ec2-user"
                       sh "ssh -o StrictHostKeyChecking=no ${ec2Instance} ${shellCmd}"
                   }
                }
            }
        }

    }
}
