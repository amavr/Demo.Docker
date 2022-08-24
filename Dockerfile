FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/node/toki
COPY package.json ./
COPY bin/www ./bin/
RUN npm i
#EXPOSE 3002
RUN chown -R node /usr/node/toki
USER node
CMD ["npm", "start"]
