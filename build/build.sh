#!/bin/bash

version=$1
arch=${2:-amd64}

# build go api program
cd ../api
make clean $arch

# build web app
cd ../web
npm run build

cd ../build

# remove docker image if exists
docker rmi -f momaek/chatgpt-plus-api:$version-$arch
# build docker image for chatgpt-plus-go
docker build --platform linux/$arch -t momaek/chatgpt-plus-api:$version-$arch -f dockerfile-api-go ../

# build docker image for chatgpt-plus-vue
docker rmi -f momaek/chatgpt-plus-web:$version-$arch
docker build --platform linux/$arch -t momaek/chatgpt-plus-web:$version-$arch -f dockerfile-vue ../

if [ "$3" = "push" ];then
  docker push momaek/chatgpt-plus-api:$version-$arch
  docker push momaek/chatgpt-plus-web:$version-$arch
fi
