FROM node:14.15.0-alpine AS angular

WORKDIR /app

COPY . /app

RUN npm install -g @angular/cli@12.2.18

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]