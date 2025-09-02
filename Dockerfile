# Use official Node.js LTS image
FROM node:18

# Create app directory inside container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all app files to container
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Run the app
CMD ["node", "index.js"]
