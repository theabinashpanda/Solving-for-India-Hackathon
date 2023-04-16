# Plantae - Plant Disease Detection
This is a project that aims to provide an easily accessible method of determining the health of plants. It uses an AI model to determine the status of a plant from its photo.

## Components
AI Model - The model uses [MobileNetV2](https://www.tensorflow.org/api_docs/python/tf/keras/applications/mobilenet_v2/MobileNetV2) at its base and has been trained on the [Cotton Disease Dataset by D3V on kaggle](https://www.kaggle.com/datasets/janmejaybhoi/cotton-disease-dataset)

Frontend - [React](https://react.dev/) and [Material UI](https://mui.com/)

Server - [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/)

## Google Compute Engine Deployment
http://34.93.173.50:8080/

## Instructions
The project needs ``BUCKET`` (GCP bucket name) and ``PROJECT_ID`` (GCP project id) as environment variables to run along with a key as a JSON to access the bucket at the root of the project. By default it binds to the port 3001 which can be changed with a ``PORT`` environment variable.

### Install dependencies
``npm install``

### Start command
``npm start``

### Dev start command
``npm run dev``
