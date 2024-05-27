# install and build
FROM node:18-bullseye-slim AS builder

WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build

# deploy
FROM nginx:1.24.0-bullseye

WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]
