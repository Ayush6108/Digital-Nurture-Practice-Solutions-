# 📚 Exercise 9: Library Management API using Spring Boot

## 🎯 Objective

Develop a RESTful web service for a simple Library Management System using **Spring Boot** and an **in-memory H2 database**.

---

## 🧰 Technologies Used

- Java 17  
- Spring Boot  
- Spring Data JPA  
- H2 Database  
- Maven  

---

## 🚀 Getting Started

### ✅ Prerequisites

Ensure your `code/` folder contains the following essential files:

code/
├── com/cognizant/LibraryManagement9/
│ ├── Book.java
│ ├── BookRepository.java
│ ├── BookController.java
│ └── LibraryManagement9Application.java
└── application.properties

yaml
Copy
Edit

> Main Class: `com.cognizant.LibraryManagement9.LibraryManagement9Application`

---

### ▶️ Run Instructions

1. Open the project in your preferred IDE.
2. Run the `LibraryManagement9Application.java` class.
3. Upon successful start, you should see in the console:

Tomcat started on port 8080 (http)

yaml
Copy
Edit

📸 *Refer to: `output/Output1.png`*

---

## 🧪 Testing the API

### 🔍 Step 1: Get All Books

**URL:**  
GET http://localhost:8080/books

ruby
Copy
Edit

**Expected Response:**

```json
[]
📸 Refer to: `output/Output2.png`

---

### ➕ Step 2: Add a New Book

**Command:**

```bash
curl -X POST http://localhost:8080/books \
-H "Content-Type: application/json" \
-d "{\"title\":\"Atomic Habits\",\"author\":\"James Clear\",\"isbn\":\"978-0735211292\"}"
```

**Expected JSON Response:**

```json
{
  "id": 1,
  "title": "Atomic Habits",
  "author": "James Clear",
  "isbn": "978-0735211292"
}
```

📸 Refer to: `output/Output3.png`

---

### 🔁 Step 3: Verify Book Entry

**URL:**

```
GET http://localhost:8080/books
```

**Expected Output:**

```json
[
  {
    "id": 1,
    "title": "Atomic Habits",
    "author": "James Clear",
    "isbn": "978-0735211292"
  }
]
```

📸 Refer to: `output/Output4.png`

---

## 📁 Project Structure

```bash
LibraryManagement9/
├── code/
│   ├── com/cognizant/LibraryManagement9/
│   │   ├── Book.java
│   │   ├── BookRepository.java
│   │   ├── BookController.java
│   │   └── LibraryManagement9Application.java
│   └── application.properties
├── output/
│   ├── Output1.png   # Server startup
│   ├── Output2.png   # Initial GET
│   ├── Output3.png   # curl POST
│   ├── Output4.png   # Final GET
```

---

## 📝 Notes

- The application uses an **H2 in-memory database**, so all data is cleared when the app restarts.
- You can enhance `Book.java` to include fields such as `publishedDate`, `category`, or `publisher`.
- Tools like **Swagger** or **Postman** can be used to test endpoints more interactively.

