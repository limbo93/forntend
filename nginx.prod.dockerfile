##### Stage 1
FROM node:latest as node
LABEL author="Limbo"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

##### Stage 2
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node /app/dist/ps-social-web /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t nginx-ps-social -f nginx.prod.dockerfile .
# docker run -d -p 8080:80 nginx-ps-social