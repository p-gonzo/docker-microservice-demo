# Docker MicroServices Demo in Node.js

## About

Two simple Node.js Express applications running inside Docker containers and communicating with one another via RESTful endpoints.

Implemented using docker-compose

## Installation

- `docker-compose build`
- `docker-compose up -d`

## Testing

`docker-compose run client-svc npm test -d`