FROM node:14-alpine as gravity-explorer

WORKDIR /gh

COPY . /gh/

COPY nuxt.config.js tsconfig.json vue-shim.d.ts package-lock.json package.json /gh/

RUN npm install \
    && npm audit fix --force \
    && npm rebuild node-sass \
    && npm run generate

FROM nginx:stable-alpine as nginx
COPY --from=gravity-explorer /gh/dist /usr/share/nginx/html
RUN mkdir -p /etc/nginx/sites-enabled

RUN ls -la /usr/share/nginx/html
RUN chmod -R 0777 /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]