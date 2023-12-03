#!/bin/bash

d=$(date +%Y%m%d)

git pull
git commit -am "New version: $d"
git push

