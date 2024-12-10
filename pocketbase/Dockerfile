FROM golang:alpine AS base
ENV POCKET_URL=0.0.0.0
ENV POCKET_PORT=8090


FROM base AS dev
WORKDIR /pb
RUN apk update \
    && apk upgrade \
    && apk add --no-cache curl
EXPOSE ${POCKET_PORT}
RUN touch init.sql
CMD sh -c "go mod tidy && go run main.go serve --http=${POCKET_URL}:${POCKET_PORT}"


FROM base AS back
WORKDIR /pb
COPY . .
RUN go mod tidy \
    && CGO_ENABLED=0 go build


FROM base
# ARG USER=default
# RUN apk add --no-cache sudo \
    # && adduser -D "$USER" \
    # && echo "$USER ALL=(ALL) NOPASSWD: ALL" > /etc/sudoers.d/"$USER" \
    # && chmod 0440 /etc/sudoers.d/"$USER"
# USER $USER
WORKDIR /app
COPY --from=back /pb/pocketbase .
# COPY pb_data pb_data
EXPOSE ${POCKET_PORT}
CMD ./pocketbase serve --http=${POCKET_URL}:${POCKET_PORT}