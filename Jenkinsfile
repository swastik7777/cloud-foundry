pipeline {
    agent any

    environment {
        CF_API  = 'https://api.cf.us10-001.hana.ondemand.com'
        CF_ORG  = '69437e9atrial'
        CF_SPACE = 'dev'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'master', 
                    credentialsId: 'gitCred', 
                    url: 'https://github.com/swastik7777/cloud-foundry.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install --prefix frontend'
            }
        }

        stage('Test') {
            steps {
                echo 'Test-cases'
            }
        }

        stage('Deploy to Cloud Foundry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'Cf_Cred', usernameVariable: 'CF_USER', passwordVariable: 'CF_PASS')]) {
                    sh '''
                        echo "Logging into Cloud Foundry..."
                        cf login -a ${CF_API} -u ${CF_USER} -p ${CF_PASS} -o ${CF_ORG} -s ${CF_SPACE}

                        echo "Deploying backend..."
                        cf push -f backend/manifest.yaml

                        echo "Deploying frontend..."
                        cf push -f frontend/manifest.yaml
                    '''
                }
            }
        }
    }
}



