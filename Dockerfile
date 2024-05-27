FROM mysql:latest 
ENV MYSQL_DATABASE team1
COPY ./scripts/ /docker-entrypoint-initdb.d/