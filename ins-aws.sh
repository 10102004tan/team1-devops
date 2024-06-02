  #!/bin/sh
  sudo apt-get update
  sudo apt-get install -y ca-certificates curl
  sudo install -m 0755 -d /etc/apt/keyrings
  sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  sudo chmod a+r /etc/apt/keyrings/docker.asc

  # Add the repository to Apt sources:
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

  # db
sudo docker network create devops
sudo docker volume create --driver local devops-db-volume
sudo docker pull 10102004tan/team1-devops-db:latest
sudo docker run -d --name devops-db -p 3306:3306 --hostname db.devops.tdc.edu.vn --network devops -v devops-db-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD="1234" -e MYSQL_USER="team1" -e MYSQL_PASSWORD="team1" -e MYSQL_DATABASE="team1" 10102004tan/team1-devops-db:latest