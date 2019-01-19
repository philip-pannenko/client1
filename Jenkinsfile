pipeline {
    agent any

    // tools {nodejs "node"}

    stages {
        // stage('Checkout') {
        //     steps {
                
        //         // sh 'printenv'
                
        //         dir('client1') {
        //              git branch: '${BRANCH_NAME}', changelog: false, credentialsId: 'aa5922b8-57ea-4a46-9178-a1f41aa24cc0', poll: false, url: 'git@github.com:philip-pannenko/client1.git' 
        //              sh "git checkout -B ${BRANCH_NAME}"
        //              sshagent(['aa5922b8-57ea-4a46-9178-a1f41aa24cc0']) {
        //                 sh('git push -u origin ${BRANCH_NAME}')
        //              }
        //         }
        //     }
        // }
        // stage('Build') {
        //     steps {
        //         sh 'npm install'
                
        //     }
        // }
        stage('Create Docker') {
            steps {
                //sh 'npm run docker:build'
                // sh 'docker build -t="foobar"'
                sh 'docker pull hello-world'
            }
        }
    }
}
