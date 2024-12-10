FROM golang:alpine AS base
ENV POCKET_URL=0.0.0.0
ENV POCKET_PORT=8090


FROM base AS dev
WORKDIR /app
RUN apk update \
    && apk upgrade \
    && apk add --no-cache curl
EXPOSE ${POCKET_PORT}
RUN touch init.sql
CMD sh -c "go mod tidy && go run main.go serve --http=${POCKET_URL}:${POCKET_PORT}"


FROM base AS back
WORKDIR /app
COPY . .
RUN go mod tidy \
    && CGO_ENABLED=0 go build


FROM base
WORKDIR /app
COPY --from=back /app/pocketbase .
EXPOSE ${POCKET_PORT}
CMD ./pocketbase serve --http=${POCKET_URL}:${POCKET_PORT}