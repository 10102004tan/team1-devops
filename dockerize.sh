
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=1234 --platform linux/x86_64 10102004tan/team1-devops-db

# 
docker run -d --name devops-db -p 3306:3306 --hostname db.devops.tdc.edu.vn --network devops -v devops-db-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD="1234" -e MYSQL_USER="team1" -e MYSQL_PASSWORD="team1" -e MYSQL_DATABASE="team1" 10102004tan/team1-devops-db:latest
docker run -d --name devops-db -p 3306:3306 -v devops-db-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD="1234" -e MYSQL_USER="team1" -e MYSQL_PASSWORD="team1" -e MYSQL_DATABASE="team1" 10102004tan/team1-devops-db:latest

sudo docker exec -it devops-db bash
mysql -uroot -p