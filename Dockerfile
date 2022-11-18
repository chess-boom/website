FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as deploy
ARG port
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE $port
CMD ["nginx", "-g", "daemon off;"]
