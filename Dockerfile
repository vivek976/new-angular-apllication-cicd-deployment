# Use an official Node.js runtime as a parent image
FROM node:14.15.0-alpine AS angular

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install Angular CLI globally
RUN npm install -g @angular/cli@12.2.18

# Install project dependencies
RUN npm install 

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command to run the Angular application
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80", "--disable-host-check"]
