FROM innosabi/nodejs:18

ADD flowsync.tar.bz2 /app

WORKDIR /app

RUN npm install --no-cache && npm cache clean --force

COPY data.json etc/config/data.json

EXPOSE 12000

# root user will run 'nginx: master process'
# nobody user will run 'nginx: worker process' as dictated in the nginx.non-root.conf
ENTRYPOINT ["tail", "-f", "/dev/null"]
#CMD ["node", "" ]