#!groovy

node {
    def mongoContainer = docker.image('mongo:4.2').run('--rm')
    docker.image("${params.AWS_ACCOUNT_INFRA}.dkr.ecr.eu-central-1.amazonaws.com/docker-pipeline-agent-jdk11:latest")
            .inside("--link ${mongoContainer.id}:mongolink --shm-size=2g " +
            "-v /var/jenkins_home/.gradle_${env.EXECUTOR_NUMBER}:/home/seluser/.gradle " +
            "-v /var/jenkins_home/.npm:/home/seluser/.npm " +
            "-v /var/jenkins_home/.node-gyp:/home/seluser/.node-gyp " +
            "-v /var/jenkins_home/.bundle:/home/seluser/.bundle " +
            "-v /var/jenkins_home/.package_cache:/home/seluser/.package_cache " +
            "-v /var/jenkins_home/.ssh:/home/seluser/.ssh " +
            "-v /var/run/docker.sock:/var/run/docker.sock --user 1000:497") {
        wrap([$class: 'TimestamperBuildWrapper']) {
            wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'XTerm']) {
                  stage('Hello') {
                      echo "Hello World"
                  }
            } // AnsiColorBuildWrapper
        } // TimestamperBuildWrapper
    }
}
