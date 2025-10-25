# ⚡ AutoTech – Smart Vehicle Slot Booking System

AutoTech is a **full-stack web application** that helps users **book vehicle service slots**, **view their bookings**, and **generate QR codes** for verification — all in one seamless platform.  
Built using **MERN Stack (MongoDB, Express, React, Node.js)**.

---

## 🧭 Table of Contents
1. [📖 Overview](#-overview)
2. [✨ Features](#-features)
3. [⚙️ Tech Stack](#️-tech-stack)
4. [📂 Folder Structure](#-folder-structure)
5. [🚀 Getting Started](#-getting-started)

---

## 📖 Overview

AutoTech allows users to:
- Register or sign up is must.
- Book a vehicle slot for parking in various locations.
- View upcoming bookings.
- Generate a **QR Code** for verification.
- Make payments securely.
- Manage all their bookings in one place.

This project follows the **MERN architecture**, meaning:
- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB Atlas  

---

## ✨ Features

✅ User-friendly and responsive UI  
✅ Secure authentication (JWT-based)  
✅ Dynamic booking system  
✅ QR code generation for every booking  
✅ Integrated payment page  
✅ Separate user bookings history page
✅ Can view locations with images
✅ Can download the recipt and extend the timings dynamically
✅ Modular, scalable, and clean codebase  

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | React.js, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JWT (JSON Web Token) |
| **QR Code** | `qrcode.react` |
| **Environment Handling** | dotenv |

---

## 📂 Folder Structure

### 🖥️ Root Directory (`codebabies/`)
```
codebabies/
├── 📁 controllers/
│ ├── authController.js # Handles signup/login logic
│ ├── bookingController.js # Booking CRUD and QR generation
│ └── paymentController.js # Payment handling (if integrated)
│
├── 📁 models/
│ ├── User.js # User schema
│ ├── Booking.js # Booking schema
│ └── Payment.js # Payment schema
│
├── 📁 routes/
│ ├── authRoutes.js # Signup/Login routes
│ ├── bookingRoutes.js # Booking operations
│ └── paymentRoutes.js # Payment endpoints
│
├── 📁 config/
│ └── db.js # MongoDB connection logic
│
├── .env # Environment variables
├── .gitignore # Ignored files
├── package.json # Backend dependencies
├── package-lock.json
└── server.js # Entry point (Express setup)
```


---

### 💻 Frontend (`autotech-frontend/`)

```
autotech-frontend/
├── 📁 public/
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
│
├── 📁 src/
│ ├── 📁 context/
│ │ └── AuthContext.js # Global user state management
│ │
│ ├── 📁 pages/
│ │ ├── About.jsx
│ │ ├── Booking.jsx
│ │ ├── Home.jsx
│ │ ├── Locations.jsx
│ │ ├── Login.jsx
│ │ ├── MyBookings.jsx
│ │ ├── Navbar.jsx
│ │ ├── Payment.jsx
│ │ ├── ProtectedRoute.jsx
│ │ ├── QRPage.jsx
│ │ ├── Signup.jsx
│ │ └── SlotSelection.jsx
│ │
│ ├── App.css
│ ├── App.js
│ ├── App.test.js
│ ├── index.css
│ ├── index.js
│ ├── logo.svg
│ ├── reportWebVitals.js
│ └── setupTests.js
│
├── package.json
├── package-lock.json
└── README.md
```


---

## 🚀 Getting Started

### 🔧 Backend Setup
1. Navigate to backend folder:
   ```bash
   cd codebabies
   
2. Install dependencies:
    ```bash
    npm install
    
3.  Create a .env file in the root folder:
    ```bash
    node server.js

4.  Start the server:
    ```bash
    ✅ MongoDB Connected
    Server running on port 5000

💻 Frontend Setup

1.  Navigate to frontend folder:
    ```bash
    cd autotech-frontend

2. Install dependencies:
    ```bash
    npm install

3. Start React app:
   ```bash
   npm start

4. App runs at http://localhost:5000


