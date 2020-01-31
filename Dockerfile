FROM cypress/base as builder

ARG env
ARG base_url
ARG rest_url
ARG logger_base_url
ARG sentry_dsn

ENV VUE_APP_DEPLOY_ENV=$env
ENV VUE_APP_SENTRY_DSN=$sentry_dsn
ENV VUE_APP_BASE_URL=$base_url
ENV VUE_APP_RESTAPI_URL=$rest_url
ENV VUE_APP_LOGGER_BASE_URL=$logger_base_url
ENV VUE_APP_POLLING_INTERVAL=3600000
ENV VUE_APP_IDLE_MODAL_REVEAL_INTERVAL=180000
ENV VUE_APP_IDLE_RELOAD_INTERVAL=300000
ENV CI=true
ENV HUSKY_SKIP_INSTALL=1


WORKDIR /app

COPY package.json /app/
COPY .npmrc /app/
COPY package-lock.json /app/

RUN npm ci

COPY ./ /app/

RUN npm run test:unit
RUN npm run test:e2e

RUN npm run build

FROM bitnami/nginx:latest

COPY --from=builder /app/nginx.conf /opt/bitnami/nginx/conf/vhosts/default.conf
COPY --from=builder /app/dist/ /app/dist/
