# Express / Mongo / Redis (soon)

The only way I could get a mongo container running and auto import a json collection was to make a seperate dockerfile and run a setup script like this
```
#!bin/bash  
mongoimport --jsonArray --file=lureproducts.json -d luredb -c lureproducts
```
After everything else was completed.
```
FROM mongo:latest

WORKDIR /data/db

COPY lureproducts.json .

EXPOSE 27017

ENV MONGO_INITDB_ROOT_USERNAME admin
ENV MONGO_INITDB_ROOT_PASSWORD password

COPY setup.sh /docker-entrypoint-initdb.d/
```
