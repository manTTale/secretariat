#!/bin/bash

USAGE="
NAME
    $(basename $0) -- Setup a Mysql local MariaDB instance to use the database.

SYNOPSIS
    $(basename $0) [-c]
"

docker_compose_devl=false

while getopts "c" opt; do
  case ${opt} in
    c) docker_compose_devl=true
      ;;
    \?) echo "$USAGE"; exit 1
      ;;
  esac
done

if docker top mysql > /dev/null 2>&1; then
    echo "Mysql DB container already running"
    exit 0
else
    echo "Starting Mysql DB container"
fi

docker run --rm --env MYSQL_ROOT_PASSWORD=root --env MYSQL_DATABASE=secretariat \
  --env MYSQL_USER=secretariat \
  --env MYSQL_PASSWORD=secretariat \
  --name mysql \
  -p 3306:3306 -d mysql:latest

if [[ "$docker_compose_devl" = true ]]; then
  docker network connect argo mysql
fi

while [[ ! $(mysql -h 127.0.0.1 -P 3306 -u root -proot -e "SELECT 1" 2> /dev/null) ]]; do
  echo "waiting for mysql..."
  sleep 3
done
