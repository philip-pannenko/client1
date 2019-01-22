#!/usr/bin/env sh
set -eu

#export COMPOSE_PROJECT_NAME='us1234'
#envsubst '${API_HOST} ${API_PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
envsubst '${COMPOSE_PROJECT_NAME}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

exec "$@"