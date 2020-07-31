#!/bin/bash

branch="$1"

port=8071

case $branch in
    test-ci) echo 'branch is test-ci'; port=8070 ;;
    master) echo 'branch is master'; port=8071 ;;
    develop) echo 'branch is develop'; port=8072 ;;
esac

name="gravity_explorer_ui-$branch"

current_id=$(docker ps -a | grep "$name" | awk '{ print $1 }')

docker stop "$current_id"
docker rm "$current_id"
docker run -itd -p "$port":80 --name "$name" gravityhuborg/gravity-explorer-ui