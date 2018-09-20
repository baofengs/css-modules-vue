#!/usr/bin/bash

# number od demos
num=11

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

cp index.html dist

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

echo -e "all demos has built succeed"

./node_modules/.bin/gh-pages -d dist
echo -e "commit to gh-pages branch succeed"
rm -rf dist
echo -e "delete dist directory succeed"
