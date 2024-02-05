# Dockerfile

# Use Node.js image as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy all files to the working directory
COPY . .

# Install dependencies
RUN npm install

# Expose port 8000 to allow external access
EXPOSE 8000

# Command to run the server
CMD ["npm", "start"]
