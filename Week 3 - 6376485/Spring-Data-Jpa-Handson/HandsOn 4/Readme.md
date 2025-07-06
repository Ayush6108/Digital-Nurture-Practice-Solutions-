# 🧪 Hands-on 4: Understanding JPA, Hibernate & Spring Data JPA

This task focuses on exploring the distinctions between **JPA**, **Hibernate**, and **Spring Data JPA**, and how they relate to each other within Java-based persistence solutions.

---

## 📁 Files Included

- `Spring Data JPA with Spring Boot.docx` — Contains detailed explanations, side-by-side comparisons, and annotated code examples.

---

## 🔍 Concept Summary

### ✅ JPA (Java Persistence API)
- Acts as a **standard interface** for ORM in Java.
- Specifies how Java classes should be mapped to relational tables.
- It’s just a **specification**, not an implementation.

### ✅ Hibernate
- A **concrete implementation** of the JPA specification.
- Offers extra features like HQL, lazy loading, and caching.
- It is the engine that runs JPA-based logic.

### ✅ Spring Data JPA
- A **layer built on top of JPA and Hibernate**.
- Provides out-of-the-box CRUD operations through repository interfaces.
- Reduces boilerplate and integrates smoothly with Spring Boot.

---

## ✨ Core Differences (Simplified)

| Concept         | What It Is                   | Role                                |
|----------------|------------------------------|-------------------------------------|
| JPA            | Specification                | Defines the ORM contract            |
| Hibernate      | Implementation               | Follows JPA rules, adds extensions  |
| Spring Data JPA| Abstraction on JPA/Hibernate | Auto-generates repositories         |

---

## 📝 Highlights

- Think of **JPA** as a rulebook.
- **Hibernate** is the tool that follows and extends those rules.
- **Spring Data JPA** helps you get the job done **faster** without writing low-level code.

---

## 📄 Documentation Reference

You’ll find the full breakdown, along with real examples and code comparisons, in the following file:

> 📘 **Document:** `Spring Data JPA with Spring Boot.docx`

This file walks you through theory + practical usage in a concise format.

---
