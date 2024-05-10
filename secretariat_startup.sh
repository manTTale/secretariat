#!/bin/bash

func_help() {
  echo "Usage: secretariat_startup <command>"
  echo "Commands:"
  echo "  start         start supporting containers"
  echo "  stop          stop supporting containers"
  echo "  reset         stop then start supporting containers"
}

# Start the supporting containers that are needed to run argo
func_start() {
  echo "Starting containers..."
  ${WORKING_DIR}/start_mysql.sh
}

# Stop the supporting containers
func_stop() {
  echo "Stopping containers..."
  docker stop mysql
}

# Reset the supporting containers
func_reset() {
  func_stop
  func_start
}

WORKING_DIR=$(dirname "$BASH_SOURCE")

command=$1
case ${command} in
"" | "-h" | "--help")
  func_help
  ;;
*)
  shift
  func_${command} $@
  if [[ $? == 127 ]]; then
    echo "sub-command $command is not valid."
    exit 1
  fi
  ;;
esac
