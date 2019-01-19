pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                dir('client1') {
                     git branch: '$branch', changelog: false, credentialsId: 'dc2a91e1-d778-42e1-95ac-8a2313feba82', poll: false, url: 'https://github.com/philip-pannenko/client1.git' 
                     sh "git checkout -B ${branch}"
                     withCredentials([usernamePassword(credentialsId: 'dc2a91e1-d778-42e1-95ac-8a2313feba82', passwordVariable: 'GIT_PASSWORD', usernameVariable: 'GIT_USERNAME')]) {
                        sh("git tag -a some_tag -m 'Jenkins'")
                        sh('git push -u origin ${branch}')
                     }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
