# File Uploader (Node.js + Cloudinary + MongoDB)

A simple file upload project built while learning backend development.  
This app allows users to upload files, stores them on Cloudinary, and saves file metadata in MongoDB.

This project was created mainly for experimentation and learning how file handling works in a real backend environment.

---

## 🚀 Features

- Upload files using Multer
- Store files on Cloudinary
- Save file details in MongoDB
- Simple EJS frontend for upload and preview
- Environment variables for secure configuration
- Basic structure ready for security and edge-case improvements

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Multer (file upload handling)
- Cloudinary (cloud storage)
- EJS (templating)
- dotenv (environment variables)

---

## 📁 Project Flow

1. User uploads a file.
2. Multer stores it temporarily on disk.
3. File is uploaded to Cloudinary.
4. File details are saved in MongoDB.
5. Uploaded image URL is displayed to the user.

---

## ⚙️ Environment Variables

Create a `.env` file in the root:
PORT=1000
MONGO_URI=your_mongodb_connection
cloud_name=your_cloudinary_name
api_key=your_cloudinary_api_key
api_secret=your_cloudinary_secret

---

## ▶️ Run Locally

```bash
npm install
npx nodemon server.js
```

## 📌 Learning Purpose

This project is part of backend experimentation while learning:

File handling

Cloud storage integration

Database storage

Backend project structure

Handling upload workflows

Security improvements and edge-case handling are being explored and added gradually