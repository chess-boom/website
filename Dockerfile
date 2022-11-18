FROM node:16-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as deploy
ARG port
COPY --from=base /app/dist /usr/share/nginx/html
EXPOSE $port
CMD ["nginx", "-g", "daemon off;"]
