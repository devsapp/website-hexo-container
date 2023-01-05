FROM node:16.15

WORKDIR /workspace
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 9000
ENTRYPOINT [ "node", "index.js" ]