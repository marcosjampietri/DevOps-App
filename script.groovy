#!/usr/bin/env groovy


def testApp() {
    echo "1, 2, 3... testing, tasting..."

}

def buildImage() {
    echo "building the docker image..."
    withCredentials([usernamePassword(credentialsId: 'docker_credentials', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
        sh 'docker build -t marcosjampietri/devops_client ./client'
        sh 'docker build -t marcosjampietri/devops_api ./server'
        
        sh "echo $PASS | docker login -u $USER --password-stdin"
        
        sh 'docker push marcosjampietri/devops_client'
        sh 'docker push marcosjampietri/devops_api'
    }
} 

return this
