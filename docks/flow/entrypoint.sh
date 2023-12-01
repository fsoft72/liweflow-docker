#!/bin/bash

node /check_arango.js


# Run the nodejs app
cd /build

while (( 1 ))
do
    node index.js
    sleep 1
done