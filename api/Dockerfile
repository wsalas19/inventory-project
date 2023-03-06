FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080 MONGO_URI=mongodb+srv://wasb1905:monkey123@testdb.a4yfwcz.mongodb.net/?retryWrites=true&w=majority CADUCIDAD_TOKEN='48h' SEED_AUTENTICACION='este-es-el-seed-desarrollo'

EXPOSE 8080

CMD [ "npm", "start" ]
