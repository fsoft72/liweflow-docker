FROM innosabi/nodejs:18

# The destination dir is /build
ADD app.tar.bz2 /

WORKDIR /build

RUN npm install --no-cache && npm cache clean --force

# COPY data.json etc/config/data.json
COPY check_arango.js /check_arango.js
COPY entrypoint.sh /entrypoint.sh

# root user will run 'nginx: master process'
# nobody user will run 'nginx: worker process' as dictated in the nginx.non-root.conf
#ENTRYPOINT ["tail", "-f", "/dev/null"]
#ENTRYPOINT [ "node", "dist/server/server.js" ]
ENTRYPOINT [ "/entrypoint.sh" ]
#CMD ["node", "" ]