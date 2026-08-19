# Full-Stack Authentication

A full-stack authentication application built with **React, Node.js, Express, and PostgreSQL**.

This project demonstrates how to build an authentication system from the client side to the backend and database, including secure password storage and user management.

## 🚀 Tech Stack

### Frontend

- React
- JavaScript
- HTML / CSS

### Backend

- Node.js
- Express.js
- REST API

### Database

- PostgreSQL

### Authentication & Security

- bcrypt
- Password hashing

---

## 🏗️ Architecture

The application follows a client-server architecture:

```text
React Client
     │
     │ HTTP Requests
     ▼
Node.js + Express API
     │
     │ SQL Queries
     ▼
PostgreSQL Database
```

The React application communicates with the Express API, which handles authentication logic and interacts with PostgreSQL to store and retrieve user data.

---

## ✨ Features

- User registration
- User login
- Secure password hashing with bcrypt
- User data stored in PostgreSQL
- RESTful API built with Express
- React-based client interface
- Backend validation and error handling
- Separation between frontend, backend, and database

---

## 🔐 Authentication Flow

### 1. User Registration

The user submits their registration information through the React interface.

```text
React
  │
  │ POST /register
  ▼
Express API
  │
  │ Hash password with bcrypt
  ▼
PostgreSQL
  │
  └── Store user
```

Passwords are never stored as plain text. Before being saved to the database, the password is hashed using **bcrypt**.

### 2. User Login

```text
React
  │
  │ POST /login
  ▼
Express API
  │
  │ Find user
  ▼
PostgreSQL
  │
  │ Return user
  ▼
Express API
  │
  │ Compare password with bcrypt
  ▼
React
```

The submitted password is compared against the stored password hash rather than comparing or storing plain-text passwords.

---

## 🛠️ What I Learned

Through this project, I practiced:

- Building REST APIs with Node.js and Express
- Connecting an Express application to PostgreSQL
- Designing and working with user data in a relational database
- Implementing user registration and login
- Hashing passwords securely with bcrypt
- Comparing passwords against stored hashes
- Connecting a React frontend to a backend API
- Handling HTTP requests and responses
- Structuring a full-stack application
- Separating frontend and backend responsibilities

---

## 🎯 Project Goals

The main goal of this project is to gain practical experience building a complete authentication system and understand how the different parts of a full-stack application communicate with each other.

---

## 📌 Future Improvements

Potential improvements include:

- [ ] Session-based authentication
- [ ] Protected routes
- [ ] Authentication middleware
- [ ] Logout functionality
- [ ] Form validation
- [ ] JWT authentication
- [ ] Refresh tokens
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Improved security and error handling
