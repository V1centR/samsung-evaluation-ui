#Build Angular configs
FROM node:latest as node
WORKDIR /app

COPY . .

FROM nginx:alpine
VOLUME /var/cache/nginx

COPY --from=node app/dist/samsung-evaluation-ui /usr/share/nginx/html
COPY /docker/nginx/default.conf /etc/nginx/conf.d/default.conf