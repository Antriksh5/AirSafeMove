FROM node:22-slim

WORKDIR /app

# 1. Install dependencies
COPY package*.json ./
RUN npm ci

# 2. Copy source code and build the application
COPY . .
RUN npm run build

# 3. Set environment variables for Cloud Run
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080

# 4. Start the standard Next.js server
CMD ["npm", "start"]