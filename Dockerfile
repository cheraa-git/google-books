FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

USER root
RUN npm install react-scripts -g
RUN npm install -g serve --save

COPY . .

EXPOSE 8080

CMD ["npm", "run", "prod"]
