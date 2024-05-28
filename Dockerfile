FROM node:20.13

COPY ./ /app
ENV DB=/app/sqlite-31.db
WORKDIR /app

RUN npm install
RUN npm run build

CMD node build
