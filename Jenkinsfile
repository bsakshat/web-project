pipeline {
    agent any
    environment {
        PROJECT_ID = 'swe645-spr20'
        APP = 'swe645-spr20-hw3f'
        CLUSTER = 'swe645'
        CLUSTER_ZONE = 'us-east4-c'
        CREDENTIALS = 'swe645-spr20'
    }
    tools {
        nodejs "node"
    }
    stages {
        stage('Build Angular Project'){
            steps{
                sh 'npm install'
                sh 'ng build --prod'
            }
        }
        stage('Make and Push Docker Image'){
            steps{
                script {
                    webapp = docker.build("bsakshat/swe645-spr20-hw3f:v${env.BUILD_ID}")
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                        webapp.push('latest')
                        webapp.push("v${env.BUILD_ID}")
                    }
                }
            }
        }
        stage('Deploy to GKE') {
            steps {
                sh "sed -i 's/swe645-spr20-hw3f:latest/swe645-spr20-hw3f:v${env.BUILD_ID}/g' deployment.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER, location: env.CLUSTER_ZONE, manifestPattern: 'deployment.yaml', credentialsId: env.CREDENTIALS, verifyDeployments: true])
            }
        }
    }
}