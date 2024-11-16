pipeline {
     agent any
     tools {
     	nodejs "nodejs" // NodeJS installation name
     }
     stages {
        // Add stage for copying files to the server
        stage("Copy") {
            steps {
                // On supprimer le contenu du dossier de destination
                sh "rm -rf /nodeApp/*"
                // On prend les fichiers du workspace et on les copie dans le dossier de destination qui se trouve dans le dossier nodeApp qui est a la racine du serveur
                sh "cp -r * /nodeApp"
            }
        }
        stage("Build") {
            steps {
                sh "cd /nodeApp"
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