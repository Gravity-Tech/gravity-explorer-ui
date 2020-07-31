#!/bin/bash


docker pull gravityhuborg/gravity-explorer-ui:latest
docker run -itd -p 8085 gravityhuborg/gravity-explorer-ui
