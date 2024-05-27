  #!/bin/sh
  # Add Docker's official GPG key:
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

  # pull backend
sudo docker pull 10102004tan/team1-devops-backend:latest
sudo docker run -d --name team1-devops-backend -p 80:3000 --network devops -e PORT="3000" -e DB_HOST="db.devops.tdc.edu.vn" -e DB_PORT="3306" -e DB_USER="root" -e DB_PASS="1234" -e DB_NAME="team1" 10102004tan/team1-devops-backend:latest
