FROM golang:alpine AS base
ENV POCKET_URL=0.0.0.0
ENV POCKET_PORT=8090


FROM base AS dependencies
WORKDIR /pb
COPY go.mod go.sum ./
RUN go mod download


FROM dependencies AS dev
WORKDIR /pb
RUN apk update \
    && apk upgrade \
    && apk add --no-cache curl
COPY . .
RUN touch init.sql
EXPOSE ${POCKET_PORT}
RUN go mod tidy
CMD ["sh", "-c", "go run main.go serve --http=${POCKET_URL}:${POCKET_PORT}"]


FROM dependencies AS back
WORKDIR /pb
COPY . .
RUN CGO_ENABLED=0 go build


FROM base
WORKDIR /pb
COPY --from=back /pb/pocketbase .
EXPOSE ${POCKET_PORT}
# COPY pb_data pb_data
COPY init.sql .
CMD ["sh", "-c", "./pocketbase serve --http=${POCKET_URL}:${POCKET_PORT}"]