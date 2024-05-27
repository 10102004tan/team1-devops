docker run -d --name backend -p 80:3000 -e PORT="3000" -e DB_HOST="172.17.0.3" -e DB_PORT="3306" -e DB_USER="root" -e DB_PASS="1234" -e DB_NAME="team1" 10102004tan/team1-devops-backend



