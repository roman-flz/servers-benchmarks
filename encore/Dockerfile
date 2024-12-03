# Use Node.js official image
FROM node:18-alpine

# Install Encore CLI globally
RUN npm install -g encore

# Set working directory inside the container
WORKDIR /app

# Copy project files into the container
COPY . .

# Expose necessary ports for the API and Dashboard
EXPOSE 4000 9400

# Set environment variables
ENV DB_USER=postgres \
    DB_PASSWORD=root \
    DB_HOST=postgresdb \
    DB_PORT=5432 \
    DB_NAME=dailytasks \
    ENCORE_ENV=development

# Run the Encore application
CMD ["encore", "run"]
