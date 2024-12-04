# Use Node.js official image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy source code to the container
COPY . .

# Expose the server port
EXPOSE 5678

# Set environment variables
ENV NODE_ENV=production

# Command to run the server
CMD ["npm", "run", "dev"]