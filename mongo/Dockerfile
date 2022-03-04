FROM mongo:latest

WORKDIR /data/db

COPY lureproducts.json .

EXPOSE 27017

ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD password

COPY setup.sh /docker-entrypoint-initdb.d/

