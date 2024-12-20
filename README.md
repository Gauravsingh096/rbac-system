# rbac-system
# Authentication and Role-Based Access Control (RBAC) with JWT

This project implements a secure **Authentication and Authorization** system with **Role-Based Access Control (RBAC)** using **JWT** for session management. Users can register, log in, and access resources based on their assigned roles. The system supports different roles such as **Admin**, **User**, and **Moderator**, each with specific access permissions.

## Features

- **User Registration**: New users can register by providing a username and password. The password is hashed using bcrypt for security.
- **User Login**: Registered users can log in with their username and password. JWT tokens are issued upon successful login.
- **Role-Based Access Control (RBAC)**: Users are assigned roles (Admin, User, Moderator), and their access to resources is controlled based on these roles.
- **JWT Authentication**: Secure authentication using JSON Web Tokens (JWT) for managing sessions and user verification.
- **Authorization**: Users can access certain resources or endpoints based on their assigned roles.

## Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/gauravsingh096/rbac-jwt-auth.git
cd rbac-jwt-auth
npm install
cd client
npm install
#Setup Environment Vairiable
JWT_SECRET=your_jwt_secret_key
MONGO_URI=mongodb://localhost:27017/rbac-jwt-auth
PORT=5000
npm install -g nodemon
nodemon server.js
```
##Roles and Permissions
Available Roles:
Admin: Full access to all resources and routes.
User: Limited access to certain routes (e.g., user-specific data).
Moderator: Can access and manage user-related resources.
Example Role-Based Access:
Only users with the Admin role can access /api/admin.
All users with valid JWT tokens can access /api/protected.


This project is licensed under the MIT License - see the LICENSE file for details.
Author
Gaurav Singh
Contact-https://www.linkedin.com/in/gauravsingh096

