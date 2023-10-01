# Use an official Node.js runtime as the base image
FROM node:16.2.0-alpine3.11

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 (the port Next.js runs on by default)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
