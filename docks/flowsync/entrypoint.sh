#!/bin/bash

node /check_arango.js


# Run the nodejs app
cd /app

while (( 1 ))
do
    node dist/server/server.js
    sleep 1
done