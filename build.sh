#!/usr/bin/bash

# number od demos
num=1

mkdir -p dist

count=1

batched=0

batchNum() {
    local c=$1
    if [ $c -le 9 ]; then
        batched=0$c
    else
        batched=$c
    fi
}

while [ $count -le $num ]; do
    batchNum $count
    cp -rf demo$batched dist
    echo -e "cp demo$batched succeed"
    pushd dist/demo$batched
    ../../node_modules/.bin/webpack
    cp ./dist/app.js .
    rm -rf dist
    popd
    echo -e "build demo$batched succeed"
    echo "============="
    count=$((count + 1))
done
