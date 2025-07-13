# 🚀 Spring REST with Spring Boot 3 – `3.spring-rest-hands-on`

## 📘 Introduction

This project demonstrates how to build RESTful Web Services in Spring Boot, replacing static data previously embedded in an Angular frontend.  
Instead of hardcoded values, data is now fetched dynamically using Spring REST APIs and XML-based bean configurations.

The repository is divided into multiple hands-on modules, each focusing on a specific backend capability. A full Spring Boot application combines all exercises for end-to-end testing.

---

## 📁 Directory Overview (`3.spring-rest-handson`)

📁 3.spring-rest-handson
├── 📁 employee-managements # ✅ Complete Spring Boot project (all hands-ons combined)
│ ├── 📄 pom.xml
│ └── 📁 src (includes controller, model, service, dao, etc.)

├── 📁 Create static employee list data using spring xml configuration
│ ├── 📁 code
│ │ ├── Employee.java
│ │ ├── EmployeeDao.java
│ │ ├── employee.xml
│ │ ├── AppConfig.java (if applicable)
│ │ └── EmployeeManagementsApplication.java
│ └── 📁 output
│ ├── 🖼️ build_success.png
│ └── 🖼️ console-logs-startup.png

├── 📁 Create REST service to gets all employees
│ ├── 📁 code
│ │ ├── EmployeeController.java
│ │ ├── EmployeeService.java
│ │ ├── EmployeeDao.java
│ │ ├── employee.xml
│ │ ├── AppConfig.java (if applicable)
│ │ └── EmployeeManagementsApplication.java
│ └── 📁 output
│ ├── 🖼️ console_logs.png
│ └── 🖼️ testing-postman_employees.png

├── 📁 Create REST service for department
│ ├── 📁 code
│ │ ├── Department.java
│ │ ├── DepartmentDao.java
│ │ ├── DepartmentService.java
│ │ ├── DepartmentController.java
│ │ ├── employee.xml
│ │ ├── AppConfig.java (if applicable)
│ │ └── EmployeeManagementsApplication.java
│ └── 📁 output
│ ├── 🖼️ console_logs.png
│ └── 🖼️ testing-postman_departments.png

markdown
Copy
Edit

---

## 🧪 Summary of Exercises

### 📌 Exercise 1: Define Static Employee Data Using Spring XML

**Goal:**  
Create and load a list of employees into memory using Spring’s XML configuration. No REST logic is involved in this step.

**Core Files:**
- `Employee.java` (Model)
- `EmployeeDao.java` (DAO)
- `employee.xml` (Spring bean config)
- `EmployeeManagementsApplication.java`

**Result:**  
Console logs confirm successful XML bean loading.

---

### 📌 Exercise 2: Expose Employee List via REST API

**Goal:**  
Build a `GET /employees` REST endpoint to serve the XML-configured employee list.

**Core Files:**
- `EmployeeController.java`
- `EmployeeService.java`
- `EmployeeDao.java`
- `employee.xml`

**Result:**  
Verified via Postman — returns employee list in JSON format.

---

### 📌 Exercise 3: REST API for Department Data

**Goal:**  
Expose department information using REST (`GET /departments`) and retrieve it through XML-configured Spring beans.

**Core Files:**
- `DepartmentController.java`
- `DepartmentService.java`
- `DepartmentDao.java`
- `Department.java`
- `employee.xml`

**Result:**  
Postman response shows department data in JSON, validated via service and DAO layers.

---

## 🧪 Testing & Execution Instructions

The **`employee-managements`** folder contains the fully integrated and working Spring Boot project.

- ✅ Successfully built with Maven
- ✅ All XML bean configurations loaded correctly
- ✅ Endpoints tested and verified via Postman

### 🔬 Test with Postman:

GET http://localhost:8080/employees # Returns employee list
GET http://localhost:8080/departments # Returns department list

pgsql
Copy
Edit

Responses are returned in JSON format, parsed from XML-configured Spring beans.

---

## 📌 Final Note

Each folder represents a self-contained exercise with minimal files to demonstrate that specific functionality.  
The full `employee-managements` project aggregates all components, providing a complete backend for employee and department management.

This structure enables both modular learning and integrated development experience with Spring REST and XML-based configurations.
