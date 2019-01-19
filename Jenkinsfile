pipeline {
    agent any

    tools {nodejs "node"}
    
    options { 
        checkoutToSubdirectory('client1') 
    }

    stages {
        stage('Checkout Other Projects') {
            steps {
                
                dir('client-utils') {
                     git branch: '${BRANCH_NAME}', changelog: false, credentialsId: '9d721ad4-95fd-4169-ad43-eab15c89b642', poll: false, url: 'git@github.com:philip-pannenko/client-utils.git' 
                     sh "git checkout -B ${BRANCH_NAME}"
                     //sshagent(['aa5922b8-57ea-4a46-9178-a1f41aa24cc0']) {
                     //   sh('git push -u origin ${BRANCH_NAME}')
                     //}
                }
            }
        }
        
        stage('Build') {
            steps {
                
                dir('client-utils') {
                    sh 'npm install'
                    sh 'npm link' 
                }
                
                dir('client1') {
                    sh 'npm link @lablenge/client-utils'
                    sh 'npm install'
                }
            }
        }
        
        stage('Create Docker') {
            steps {
                dir('client1') {
                    sh 'npm run docker:build'
                }
            }
        }
        
        stage ('Run Docker') {
            
            environment { 
                COMPOSE_PROJECT_NAME="${env.BRANCH_NAME}"
                ENV='dev'
            }
                
            steps {
                
                dir('client1') {
                
                    // sh 'docker-compose down ';
                    sh "docker-compose -p ${env.BRANCH_NAME} up -d ";
                
                }
            }
        }
    }
}
