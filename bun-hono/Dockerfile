# Use the official Bun image
FROM oven/bun:latest

# Set the working directory inside the container
WORKDIR /app

# Copy only the essential files to the container
COPY package.json bun.lockb ./

# Install dependencies inside the container
RUN bun install

# Copy the source code to the container
COPY src ./src

# Expose the application port
EXPOSE 9910

# Start the server
CMD ["bun", "run", "dev"]
