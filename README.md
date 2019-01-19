#CICD - Client2

Followed these instructions:

`https://nodejs.org/en/docs/guides/nodejs-docker-webapp/`

Followed these instructions for running Docker from NPM

`https://gist.github.com/duluca/d13e501e870215586271b0f9ce1781ce/`

In order to publish the repository
```
npm adduser 
npm publish --access=public
```

`docker run -p 80:80 aistated/net.pannenko.cicd.client1`

Builds both the server and client. This operation can be rerun as many times as preferred.

`COMPOSE_PROJECT_NAME=US1234 docker-compose up`

Depending on the environment that the docker-compose file is called from, 
a following command to connect the environment network will be necessary (ie: DEV, STAGE, PROD) 

`docker network connect <env network> <containers>`

