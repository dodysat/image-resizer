FROM node:16-alpine
WORKDIR /home/node
COPY --chown=node:node package.json ./
RUN chown node:node -R /home/node
USER node
RUN npm install && npm cache clean --force --loglevel=error
COPY --chown=node:node . .
CMD ["npm", "start"]
