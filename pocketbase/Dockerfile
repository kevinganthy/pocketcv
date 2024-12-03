FROM golang:alpine AS base
ENV POCKET_URL=0.0.0.0
ENV POCKET_PORT=8090


FROM base AS dev
WORKDIR /pb
RUN apk update && apk upgrade
RUN apk add --no-cache sqlite
RUN apk add --no-cache curl
RUN touch init.sql
EXPOSE ${POCKET_PORT}
CMD go mod tidy; go run main.go serve --http=${POCKET_URL}:${POCKET_PORT}


FROM base AS back
WORKDIR /pb
COPY . .
RUN go mod tidy
RUN CGO_ENABLED=0 go build


FROM alpine:latest
ENV POCKET_PORT=8090
ENV POCKET_URL=0.0.0.0
WORKDIR /app
COPY --from=back /pb/pocketbase .
COPY init.sql ./init.sql
EXPOSE ${POCKET_PORT}
CMD ./pocketbase serve --http=${POCKET_URL}:${POCKET_PORT}