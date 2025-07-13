# 🌐 Spring REST with Spring Boot 3 – `2.spring-rest-hands-on`

## 📘 Overview

This repository showcases hands-on practice with Spring Boot to develop RESTful web services.  
Each task is organized in a modular structure for clarity, and a consolidated working project is also included for integration testing.

---

## 📁 Directory Layout

All content resides inside the `2.spring-rest-hands-on` root folder, organized as follows:

📁 2.spring-rest-hands-on
├── 📁 Hello World RESTful Web Service
│ ├── 📁 code
│ └── 📁 output
│ ├── 🖼️ console-output.png # Contains app run + test log
│ └── 🖼️ testing-output-hello-world.png
├── 📁 REST - Country Web Service
│ ├── 📁 code
│ ├── 📁 output
│ │ ├── 🖼️ console-output.png
│ │ └── 🖼️ testing-output-country.png
│ └── 🧾 REST - Country Web Service (SME Explanation).docx
├── 📁 REST - Get country based on country code
│ ├── 📁 code
│ └── 📁 output
│ ├── 🖼️ console-output.png
│ └── 🖼️ testing-output-country-code.png
├── 📁 spring-learn2 # Complete project combining all 3 exercises
└── 📄 README.md

yaml
Copy
Edit

---

## 🧪 Exercise Summary

The repository includes three key REST API exercises:

| Exercise                 | Description                                                                | Endpoint                    |
|--------------------------|----------------------------------------------------------------------------|-----------------------------|
| Hello World REST         | Returns `"Hello World!!"` message with logs                                | `GET /hello`                |
| Country REST (Bean)      | Responds with a `Country` object (India), configured via Spring XML        | `GET /country`              |
| Country by Code (Param)  | Fetches country info based on the code (case-insensitive XML lookup)       | `GET /countries/{code}`     |

---

## 📂 Folder Content Breakdown

Each exercise includes:
- A `code/` folder containing the source code and configurations
- An `output/` folder with:
  - 🟢 Console logs showing Spring Boot startup and method execution
  - 🟢 Screenshots from Postman or browser confirming the expected response

The `spring-learn2` project integrates all exercises into a single runnable Spring Boot application.

---

## ⚙️ Technology Stack & Features

- **Spring Boot** with **Spring Web**
- Bean configuration using `XML`
- Auto component scanning & dependency injection
- Logging implemented using `SLF4J`

---

## 🚀 How to Run the Full Project

1. Open the `spring-learn2` project in Eclipse (or your IDE of choice)
2. Locate and run `SpringLearn1Application.java` as a **Spring Boot App**
3. Test the endpoints using Postman or browser:

http://localhost:8083/hello
http://localhost:8083/country
http://localhost:8083/countries/in

yaml
Copy
Edit

---

## ✅ Final Notes

This hands-on structure allows for:
- Focused learning via individual, well-scoped exercises
- Comprehensive validation using a combined application (`spring-learn2`) for all features

Each segment of the project demonstrates a key REST concept, enabling smooth progression from basic to slightly advanced use cases.
