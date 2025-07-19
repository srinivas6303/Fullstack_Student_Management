# 🧑‍🎓 Student Management System - Full Stack Project

This is a full-stack **Student Management System** that provides complete **CRUD** operations for managing student data. The project is built using:

- **Backend:** Spring Boot, Rest Api, Spring Data JPA, MySQL
- **Frontend:** React.js, React Router DOM, Toast Notifications

---

## 🚀 Features

### ✅ Backend (Spring Boot)
- Add a new student
- Get all students
- Get a student by ID
- Update student details
- Delete a student by ID
- Search students by name or substring

### ✅ Frontend (React)
- Component-based structure
- React Router DOM for navigation
- Toast notifications for success/error messages
- Hooks like `useState`, `useEffect` for state and lifecycle management
- Axios for HTTP requests

---

## 📁 Project Structure

### 🔙 Backend - `StudentManagementBackend`
#### Technologies:
- Java 17+
- Spring Boot
- Rest Api
- Spring Data JPA
- MySQL
- Maven

#### Controllers Used:
```java
package com.example.StudentManagementBackend;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {
    // Endpoints for CRUD and search operations
}
