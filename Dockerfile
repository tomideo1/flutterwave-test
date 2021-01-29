FROM node:alphine
RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app
WORKDIR /app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 8080
CMD [ "npm ", "run", "dev" ]