FROM node:12-alpine AS compile-image

RUN apk --no-cache add curl
RUN apk --no-cache add git
RUN git --version

WORKDIR /app

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm cache clean --force

RUN npm ci

ENV PATH="./node_modules/.bin:$PATH" 

COPY . .

RUN ng build --prod

FROM nginx:1.15.8-alpine

COPY --from=compile-image /app/dist/nomos /usr/share/nginx/html