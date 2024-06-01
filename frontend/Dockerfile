# # Sử dụng image Node.js
# FROM node:lts-alpine as build
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY . .
# RUN npm run build


# Nginx
FROM nginx:latest as prod

# Sao chép tệp cấu hình của Nginx từ máy local vào container
# COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/

# Thiết lập thư mục làm việc trong container
WORKDIR /usr/share/nginx/html

# COPY tat ca trong folder frontend (source cua minh) vao trong container
COPY ./build .

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]