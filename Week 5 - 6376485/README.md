
# 🏦 Microservices Hands-On with Eureka Discovery & API Gateway

This repository demonstrates how to build and run a **Spring Boot microservices architecture** using **Eureka Discovery Server** and **Spring Cloud API Gateway**. It includes multiple microservices, service registration, API routing, and a custom global filter for logging incoming requestes.

## 📌 Project Objective

The goal of this hands-on is to:
- Understand monolithic vs microservices architecture
- Build independent Spring Boot services (`account`, `loan`, `greet`)
- Register them with a Eureka Discovery Server
- Route requests through an API Gateway
- Log all requests using a Global Filter

---

## 🛠️ Tech Stack

- Java 17+
- Spring Boot
- Spring Web
- Spring Cloud Netflix Eureka
- Spring Cloud Gateway
- Maven

---

## 📁 Project Structure

```
Microservices-Eureka/
│
├── microservices/
│   ├── account-service/             # Microservice for account info
│   ├── loan-service/                # Microservice for loan info
│   ├── greet-service/               # Microservice with Hello World
│   ├── eureka-discovery-server/     # Eureka registry server
│   └── api-gateway/                 # Gateway for routing requests
└── Microservices Combine Project Output.png  # Output reference
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/Microservices-Eureka.git
cd Microservices-Eureka/microservices
```

### 2. Build All Projects
Each service is a Maven project. Build them individually:

```bash
cd eureka-discovery-server
mvn clean install

cd ../account-service
mvn clean install

cd ../loan-service
mvn clean install

cd ../greet-service
mvn clean install

cd ../api-gateway
mvn clean install
```

---

## 🚀 Running the Services

### Step 1: Start Eureka Discovery Server
```bash
cd eureka-discovery-server
mvn spring-boot:run
```
📍 Runs on: [http://localhost:8761](http://localhost:8761)

### Step 2: Start Microservices
Run these in separate terminals:

```bash
cd account-service
mvn spring-boot:run     # Runs on port 8080

cd ../loan-service
mvn spring-boot:run     # Runs on port 8081

cd ../greet-service
mvn spring-boot:run     # Runs on port 8082
```

All these will register themselves to Eureka.

### Step 3: Start API Gateway
```bash
cd ../api-gateway
mvn spring-boot:run     # Runs on port 9090
```

---

## 🔗 Sample API Endpoints

Once all services are up and running:

- ✅ **Greet Service**  
  [http://localhost:9090/greet-service/greet](http://localhost:9090/greet-service/greet)

- ✅ **Account Service**  
  [http://localhost:9090/account-service/accounts/00987987973432](http://localhost:9090/account-service/accounts/00987987973432)

- ✅ **Loan Service**  
  [http://localhost:9090/loan-service/loans/H00987987972342](http://localhost:9090/loan-service/loans/H00987987972342)

---

## 🧾 Features Implemented

- ✅ RESTful services using Spring Boot
- ✅ Eureka Server for service discovery
- ✅ API Gateway with route configuration
- ✅ Global Logging Filter for request tracing
- ✅ All services are independently runnable and modular

---

## 📷 Screenshots

The project includes a sample screenshot:
- **Microservices Combine Project Output.png** (in root folder)

---

## 🧠 Learnings

- Understanding of service discovery pattern
- Managing ports and service isolation
- Role of API Gateway in routing and monitoring
- How microservices improve scalability and resilience

---
