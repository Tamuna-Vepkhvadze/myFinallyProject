# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies for building sqlite3 native module
RUN apk add --no-cache python3 make g++ bash

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "run", "dev"]
