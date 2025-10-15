# Base image
FROM node:22-alpine

WORKDIR /app

# Install dependencies for building frontend
RUN apk add --no-cache bash

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
