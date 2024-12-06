FROM node:20-alpine

ARG USER=default

RUN apk add --no-cache sudo \
        && adduser -D "$USER" \
        && echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/"$USER" \
        && chmod 0440 /etc/sudoers.d/"$USER" \
        && apk add --no-cache libc6-compat

USER $USER

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]