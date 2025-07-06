# 🛠️ Spring Data JPA – Hands-on Practice

## 🔹 Hands-on 1:  
**Spring Boot + Spring Data JPA + MySQL Integration**

### 🎯 Objective

Set up a Spring Boot application that connects to a MySQL database using Spring Data JPA. This hands-on demonstrates how to build a basic layered architecture using `@Entity`, `@Repository`, and `@Service`, powered by Hibernate.

---

## 📁 Project Name: `orm-learn`

### 📦 Contents Included

- `orm-learn/` — Complete Spring Boot Maven project
- `Codes/` — Java source files relevant to the task
- `Output/` — Console log output (`screenshot.png`)
- `MySQL/` — SQL scripts and output screenshot (`screenshot.png`)

---

## 🧩 Project Highlights

- **Entity:** `Country.java`
- **Repository:** `CountryRepository.java` *(extends JpaRepository)*
- **Service Layer:** `CountryService.java`
- **Main Runner:** `OrmLearnApplication.java`

### ⚙️ Configuration Notes

- DB connection details are configured in `application.properties`
- Console logs show Hibernate-generated SQL queries and app flow
- The application uses the `ormlearn` schema in a MySQL database

---

## 🧾 Console Output

Upon running the application, the following output is expected:

```
Inside main  
Start  
List of countries (from DB)  
End  
```

📸 Console output screenshot:  
`Output/screenshot.png`

---

## 🗃️ MySQL Setup

### ✅ SQL Used:

```sql
CREATE SCHEMA ormlearn;

CREATE TABLE country (
    co_code VARCHAR(2) PRIMARY KEY,
    co_name VARCHAR(50)
);

INSERT INTO country VALUES ('IN', 'India');
INSERT INTO country VALUES ('US', 'United States of America');
INSERT INTO country VALUES ('JP', 'Japan');
INSERT INTO country VALUES ('FR', 'France');
```

✔️ Multiple country entries were inserted into the database.  
📸 SQL output screenshot:  
`MySQL/screenshot.png`

---

## 📝 Summary

This exercise demonstrates how Spring Boot simplifies ORM operations using Spring Data JPA, while leveraging Hibernate for persistence. The project shows how entities are mapped, data is retrieved using repositories, and how layering is applied using services.

Feel free to enhance this setup by adding more tables, writing custom queries, or exploring `@Query` annotations.
