# Node Task API

A simple Node.js CRUD REST API built using Express and deployed to Google Cloud Run.

## Features
- Create, Read, Update, Delete tasks
- Layered architecture (Controller, Service, Model)
- Dockerized using Docker
- Deployed to Google Cloud Run

## Live URL
https://node-task-api-941316937074.us-central1.run.app

## Endpoints
- GET /api/v1/tasks
- POST /api/v1/tasks
- GET /api/v1/tasks/:id
- PUT /api/v1/tasks/:id
- DELETE /api/v1/tasks/:id

## Run locally

npm install
npm start

## Docker / Cloud Run
Build AMD64 image on Apple Silicon:

docker buildx build --platform linux/amd64 -t node-task-api-amd64 .

docker tag node-task-api-amd64 us-central1-docker.pkg.dev/platform-playground-480914/docker-images/node-task-api:latest

docker push us-central1-docker.pkg.dev/platform-playground-480914/docker-images/node-task-api:latest

gcloud run deploy node-task-api --image us-central1-docker.pkg.dev/platform-playground-480914/docker-images/node-task-api:latest --region us-central1 --platform managed --allow-unauthenticated --port 8080