# Use an official Node.js image as a parent image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Conditional chmod only if files exist
RUN ls package*.json 2>/dev/null && chmod 644 package*.json || true

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your React app is running on
EXPOSE 3000

# Set the default command to start your React app
CMD ["npm", "start"]
