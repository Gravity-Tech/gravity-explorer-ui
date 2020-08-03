#!/bin/bash

branch="$1"
image_tag='master'

port=8071

case $branch in
    test-ci) echo 'branch is test-ci'; port=8070 ;;
    master) echo 'branch is master'; port=8071 ;;
    develop) echo 'branch is develop'; port=8072; image_tag='develop' ;;
esac

name="gravity_explorer_ui-$branch"

current_id=$(docker ps -a | grep "$name" | awk '{ print $1 }')

image_name="gravityhuborg/gravity-explorer-ui:$image_tag"

docker pull "$image_name"

docker stop "$current_id"
docker rm "$current_id"
docker run -itd -p "$port":80 --name "$name" "$image_name"
