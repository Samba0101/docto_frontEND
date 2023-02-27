FROM node:latest as build

COPY package.json package-lock.json ./
COPY . .

RUN npm i
RUN npm install --prod

FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=build /dist/DoctoGest/ /usr/share/nginx/html
#COPY dist/ /usr/share/nginx/html

EXPOSE 4200