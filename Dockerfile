# Use the official Node.js image as the base image
FROM node:22-alpine

#
# Set the working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

#copy the rest of the application code to the working directory
COPY . .
# Expose the port the app runs on
EXPOSE 5003 
# Start the application
CMD ["node", "./src/server.js"]
# Use the official Node.js image as the base image
#FROM node:22-alpine    --- IGNORE ---
    
    




