# 🔐 Spring REST with Spring Boot 3 – `JWT-Hands-on`

## 📘 Overview

This hands-on project demonstrates how to implement a simple authentication service using Spring Boot that returns a **JWT (JSON Web Token)** upon successful login via **HTTP Basic Authentication**.

When the client sends valid credentials, the application issues a JWT as a JSON response.

---

## 📤 Sample Request & Response

### 🧾 Request:
```bash
curl -s -u user:pwd http://localhost:8090/authenticate
✅ Response:
json
Copy
Edit
{
  "token": "eyJhbGciOiJIUzI1NiJ9..."
}
📂 Project Directory Structure
All contents reside under Create authentication service that returns JWT inside the JWT-hands-on folder.

graphql
Copy
Edit
📁 JWT-hands-on
└── 📁 Create authentication service that returns JWT
    ├── 📁 code
    │   ├── AuthenticationController.java     # Handles /authenticate endpoint
    │   ├── JwtService.java                   # Generates the JWT using a secret key
    │   ├── SecurityConfig.java               # Sets up Basic Auth & disables CSRF
    │   ├── application.properties            # App config (port 8090, etc.)
    │   ├── SpringLearn2Application.java      # Main class for Spring Boot
    │   └── pom.xml                           # Maven project config
    │
    ├── 📁 output
    │   ├── 🖼️ Console Output - 01.png         # App startup log (main method run)
    │   ├── 🖼️ Console Output - 02.png         # Log output during API call
    │   ├── 🖼️ Postman Output.png              # Screenshot showing JSON token
    │   └── 🖼️ Terminal Output.png             # curl result with token
    │
    └── 📁 spring-learn2
        └── 📁 src/main/...                    # Full working Spring Boot Maven project
✅ Key Features Covered
Accept user login credentials via Basic Authentication

Generate JWT using the JJWT library

Return JWT in a clean JSON response

Stateless Spring Security setup

Compatible with both Postman and curl for testing

🧪 Running the Application
Step-by-Step Guide
Import the project (spring-learn2) into Eclipse or IntelliJ.

Run the application via SpringLearn2Application.java.

Test the endpoint using:

🧵 Option A: Terminal
bash
Copy
Edit
curl -s -u user:pwd http://localhost:8090/authenticate
🧵 Option B: Postman
Method: GET

URL: http://localhost:8090/authenticate

Authorization: Basic Auth (user / pwd)

Expected Output: JSON response with token

🖼️ Verification Outputs
Screenshots provided in the output/ folder include:

✅ Spring Boot startup logs

✅ Postman request & response with JWT

✅ Console log on request hit

✅ curl terminal result

📌 Conclusion
This hands-on exercise successfully demonstrates:

Implementing JWT authentication in a Spring Boot app

Configuring security with Basic Auth

Returning JWTs via a RESTful endpoint

Testing authentication with both Postman and curl

You can directly import the project, run, and start issuing tokens from /authenticate.

