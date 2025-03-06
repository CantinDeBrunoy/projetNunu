FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"] 

FROM node:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["npm", "build"]