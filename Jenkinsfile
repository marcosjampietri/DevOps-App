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
        stage("Copy files to Ansible serve") {
            steps {
                script {
                    echo "copying all the stuff... don't bother"
                    sshagent(['ansible_server_key']) {
                        sh "scp -o StrictHostKeyChecking=no ansible/* root@138.68.128.195:/root"
                        withCredentials([sshUserPrivateKey(credentialsId: 'ec2-server-key', keyFileVariable: 'KEYFILE', usernameVariable: 'USER')]) {
                            sh "scp ${KEYFILE} root@138.68.128.195:/root/docker-server.pem"
                        }
                        
                    }
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
                SSH_KEY_SECRET = credentials('ssh_key_private')
                MY_IP = credentials('my_ip')
                
            }
            steps {
                script {
                   echo 'provisioning server on AWS'
                   dir('terraform') {
                       sh "terraform init"
                       sh "terraform apply \
                         -var 'my_ip=${MY_IP}' \
                         -var 'ssh_key_private=${SSH_KEY_SECRET}' \
                         --auto-approve"
                       EC2_IP = sh(
                           script: "terraform output ec2_public_ip",
                           returnStdout: true
                       ).trim()
                       
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
