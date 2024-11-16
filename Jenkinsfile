pipeline {
     agent any
     tools {
     	nodejs "nodejs" // NodeJS installation name
     }
     stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "npm run build"
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}