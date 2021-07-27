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
                   echo "Deploying"
                }
            }
        }
        stage("build") {
            steps {
                script {
                    echo "Deploying"
                }
            }
        }
        stage("test") {
            steps {
                script {
                    echo "Deploying"
                }
            }
        }
        stage("deploy") {
            steps {
                script {

                    echo "Deploying to"
                }
            }
        }
    }
}
