FROM node:14.17-alpine AS build-components
WORKDIR "/usr/src/app"
COPY ./package.json ./
COPY ./packages/components/package.json ./packages/components/

RUN yarn install
COPY ./ ./
COPY ./package.json ./yarn.lock

RUN yarn workspace components build

FROM node:14.17-alpine AS build-utils
WORKDIR "/usr/src/app"
COPY ./package.json ./
COPY ./packages/utils/package.json ./packages/utils/

RUN yarn install
COPY ./ ./
COPY ./package.json ./yarn.lock

RUN yarn workspace utils build

FROM node:14.17-alpine
WORKDIR "/usr/src/app"
COPY ./package.json ./
COPY ./packages/components/package.json ./packages/components/
COPY ./packages/utils/package.json ./packages/utils/
COPY ./packages/my-app/client/package.json ./packages/my-app/client/

COPY --from=build-components /usr/src/app/packages/components/build ./packages/components/
COPY --from=build-utils /usr/src/app/packages/utils/build ./packages/utils/

RUN true
RUN yarn install
COPY ./ ./
COPY ./package.json ./yarn.lock

RUN yarn workspace my-app-client add components@0.1.0 utils@0.1.0

COPY ./package.json ./yarn.lock

EXPOSE 3000

CMD [ "yarn", "my-app-client:start"]