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
        // Add stage for copying files to the server
        stage("Deploy") {
            steps {
                // On supprimer le contenu du dossier de destination
                sh "rm -rf /nodeApp/*"
                // On prend les fichiers du workspace et on les copie dans le dossier de destination qui se trouve dans le dossier nodeApp qui est a la racine du serveur
                sh "cp -r * /nodeApp"
                
            }
        }
    }
    post { 
        always { 
            cleanWs()
        }
    }
}