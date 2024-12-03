# Use the official Bun image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package and lock files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy the rest of the application
COPY . .

# Expose the server port
EXPOSE 1112

# Set environment variables
ENV NODE_ENV=development

# Start the application without relying on the dist folder
CMD ["bun", "run", "dev"]
