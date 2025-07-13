# 🌱 Spring REST with Spring Boot 3 – `1.spring-rest-hands-on`

## 📌 Introduction

This repository contains the completed implementations of two Spring Boot exercises.  
All tasks have been developed within a single Maven-based project named **`spring-learn`**, which has been successfully built and executed.

The contents are structured into dedicated folders for each exercise, clearly separating code and output for ease of understanding and validation.

---

## 📂 Directory Layout

📁 1.spring-rest-handson
├── 📁 handson1
│ ├── 📁 code
│ └── 📁 output
│ ├── 🖼️ build-success-terminal-output.png
│ └── 🖼️ console-output.png
├── 📁 handson2
│ ├── 📁 code
│ └── 📁 output
│ └── 🖼️ console-output.png
├── 📁 spring-learn # Unified project for both exercises
└── 📄 README.md

markdown
Copy
Edit

---

## 🧪 Exercise Summaries

### 🧩 Exercise 1: Set Up a Spring Web Project via Maven

#### 🛠 Steps Performed:

- Initialized a new Spring Boot project using Spring Initializr
- Project Details:
  - **Group**: `com.cognizant`
  - **Artifact**: `spring-learn`
  - **Dependencies**: `Spring Web`, `Spring Boot DevTools`
- Edited the `SpringLearnApplication.java` file to include a log statement inside the `main()` method
- Built the project using Maven with proxy settings:

```bash
mvn clean package -Dhttp.proxyHost=proxy.cognizant.com \
-Dhttp.proxyPort=6050 -Dhttps.proxyHost=proxy.cognizant.com \
-Dhttps.proxyPort=6050 -Dhttp.proxyUser=123456
📦 Folder Content:
handson1/code/: Modified SpringLearnApplication.java

handson1/output/: Screenshots of successful build and console output ("Inside main")

🧩 Exercise 2: Spring Core – Inject SimpleDateFormat Using XML Configuration
🛠 Implementation Details:
Created an XML config file date-format.xml in src/main/resources

Declared a SimpleDateFormat bean with the format dd/MM/yyyy

Modified SpringLearnApplication.java:

Added displayDate() method

Loaded the XML using ClassPathXmlApplicationContext

Retrieved the bean and parsed a date string

Logged the parsed date in the console

📦 Folder Content:
handson2/code/: Contains updated SpringLearnApplication.java and date-format.xml

handson2/output/: Screenshot of the console displaying the parsed date

▶️ Build & Run Guide
🔧 Build (with proxy settings):
bash
Copy
Edit
mvn clean package -Dhttp.proxyHost=proxy.cognizant.com \
-Dhttp.proxyPort=6050 -Dhttps.proxyHost=proxy.cognizant.com \
-Dhttps.proxyPort=6050 -Dhttp.proxyUser=123456
🚀 Run in Eclipse:
Right-click SpringLearnApplication.java

Choose: Run As → Java Application

✅ Summary
Both exercises were completed successfully within the spring-learn project.
Each task has a dedicated folder with:

Implemented source code

Screenshot proof of the expected output

This structure ensures a clear and organized approach to validating the hands-on objectives.
