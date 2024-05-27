docker run -d --name backend -p 80:3000 -e PORT="3000" -e DB_HOST="db.devops.tdc.edu.vn" -e DB_PORT="3306" -e DB_USER="root" -e DB_PASS="1234" -e DB_NAME="team1" 10102004tan/team1-devops-backend

docker run -d --name devops-backend -p 8080:3000 --network devops -e PORT="3000" -e DB_HOST="db.devops.tdc.edu.vn" -e DB_PORT="3306" -e DB_USER="admin" -e DB_PASS="admin" -e DB_NAME="tdc-devops" 10102004


docker run -d --name backend -p 80:3000 -e PORT="3000" -e DB_HOST="13.211.133.8" -e DB_PORT="3306" -e DB_USER="root" -e DB_PASS="1234" -e DB_NAME="team1" 10102004tan/team1-devops-backend:latest


