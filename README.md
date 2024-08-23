# Train Ticketing Service - API Gateway

This repository contains the API Gateway for the Train Ticketing Service, which acts as the central hub for routing requests across multiple microservices, including Authentication, Search, and Booking services. It handles routing, load balancing, and monitoring for the underlying microservices

You need to run all the microservice applications along with this API Gateway for the fully functional backend. Below are the links to the other microservice repositories. Each repository contains a detailed guide on installation and running that specific application:
- Auth Service: https://github.com/noorudd-in/Train-Auth-Service
- Search Service: https://github.com/noorudd-in/Train-Search-Service
- Booking Service: https://github.com/noorudd-in/Train-Book-Service



# Installation
1. Clone the repository:
2. Install dependencies:\
`npm install`
3. Run all the other micro-service application in the background. By default, Search service will run on port 1440, Auth on 1441 and Booking service on port 1442.
4. Now start your application using\
`npm start`. By default the API Gateway service will start on\
`http://localhost:8080`
5. Once API Gateway started, it will automatically ping other microservice applications for you. If any application is not running, it will notify you!

# Note
Before starting the API Gateway, ensure all microservices (Auth, Search, Booking) are running on their respective ports. The gateway will interact with them based on the configured URLs. If you have changed any port in any application, you can update it in the `.env` of this API Gateway.

# API Endpoints
`http://localhost:8080/auth/` -> This routes all the request to Auth service.\
`http://localhost:8080/search/` -> This routes all the request to Search service.\
`http://localhost:8080/book/` -> This routes all the request to Booking service.

# Dependencies
- axios: For making HTTP requests.
- dotenv: Loads environment variables from a .env file.
- express: Web framework for building the API Gateway.
- express-rate-limit: Implements rate limiting for the gateway.
- http-proxy-middleware: For proxying requests to the respective services.
- morgan: Request logging for monitoring.

# Dev Dependencies
- nodemon: Automatically restarts the server on file changes during development.

# Contributing
Contributions are welcome! Please create an issue or submit a pull request.

# License
MIT