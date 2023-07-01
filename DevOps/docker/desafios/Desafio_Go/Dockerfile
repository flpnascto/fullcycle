# Dockerfile.distroless
FROM golang:latest as builder

WORKDIR /root/hello

RUN go mod init example/hello

COPY ./hello/hello.go .

RUN go build -o .

FROM gcr.io/distroless/static-debian11

WORKDIR /root

COPY --from=builder /root/hello .

ENTRYPOINT ["./hello"]
