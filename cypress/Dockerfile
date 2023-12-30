# Use an official Node.js image as the base image
FROM node:14.16.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Expose the default Cypress port
EXPOSE 80

# Command to run your tests (adjust as needed)
CMD ["npm", "run", "cypress:run"]
