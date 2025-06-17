
# Module 2 Assignment - LMS User API

## 📚 Objective

This project is part of Module 2 of the MERN Fullstack course. The goal is to build a basic **Express.js + TypeScript** backend for a Learning Management System (LMS). It provides a simple REST API for user registration, login, and user information retrieval.

---

## 🚀 Features

- ✅ Register a new user via `/api/register`
- ✅ Login with existing credentials via `/api/login`
- ✅ Fetch user details by ID via `/api/user/:id`
- ✅ Middleware for request logging and error handling
- ✅ Postman collection included for testing

---

## 🧾 Project Structure

Module2_Assignment/
├── src/
│ ├── server.ts
│ ├── routes/
│ │ └── userRoutes.ts
│ ├── middleware/
│ │ ├── logger.ts
│ │ └── errorHandler.ts
│ └── models/
│ └── user.ts
├── package.json
├── tsconfig.json
├── postman_collection.json
└── README.md

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/Module2_Assignment.git
cd Module2_Assignment
```
### 2. Install Dependencies
```bash

npm install
```
### 3. Run the Server
```bash


npm run dev
Server will start on:
http://localhost:3000
```

##📬 API Endpoints
### ➕ POST /api/register
Registers a new user.
```bash
Sample Body
json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "123456"
}
```
### 🔐 POST /api/login
Logs in an existing user.
```bash
Sample Body
json

{
  "username": "john_doe",
  "password": "123456"
}
```
### 👤 GET /api/user/:id
Fetch user details by ID (without password).

```bash
GET /api/user/1
```
### 🧩 Middleware
### 📋 logger.ts
Logs each incoming request with method, path, and timestamp.

### 🚨 errorHandler.ts
Handles errors gracefully and returns user-friendly error messages.

### 📮 Postman Collection
A Postman collection (postman_collection.json) is included with:

✅ POST /api/register

✅ POST /api/login (valid and invalid)

✅ GET /api/user/:id

You can import it into Postman via:

Open Postman

Click Import

Select postman_collection.json from this project

### 👨‍💻 Technologies Used
Express.js

TypeScript

ts-node

nodemon

Postman

### 📦 Submission Details
Files to be submitted:

src/server.ts

src/routes/userRoutes.ts

src/middleware/logger.ts

src/middleware/errorHandler.ts

src/models/user.ts

postman_collection.json

README.md

### 📝 Author
Niharika



### 🧾 Conclusion
This project serves as a foundational exercise in building secure and structured backend services using Express.js and TypeScript. By implementing user registration, login, and retrieval functionalities with proper middleware, the assignment reinforces best practices in RESTful API design, code organization, and error handling. It sets the groundwork for developing more complex features in a real-world Learning Management System (LMS).
