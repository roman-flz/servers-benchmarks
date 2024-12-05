# Use Node.js official image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./ 
COPY package-lock.json ./
RUN npm install --production

# Copy source code to the container
COPY src ./src
COPY .env ./
# Expose the server port
EXPOSE 12341

# Set environment variables
ENV NODE_ENV=production

# Command to run the server
CMD ["npm", "run", "dev"]
