FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS deploy
ARG port
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE $port
CMD ["nginx", "-g", "daemon off;"]
