# Hostel Complaint Management System

A full-stack web application to manage hostel maintenance complaints digitally.
Students can raise issues with images, track status, and view resolutions.
Admins can manage, resolve, and upload proof for complaints.

---

## Features

### Student
- Google Sign-In using Firebase Authentication
- Raise complaints with:
  - Title
  - Category
  - Description
  - Image upload (before issue)
- Track complaint status:
  - Pending
  - In Progress
  - Solved
- View:
  - Before image
  - After image (once solved)
  - Admin remarks
  - Resolution date

### Admin
- Backend-based admin login
- View all complaints
- See student name and email
- Filter complaints by status
- Update status (In Progress / Solved)
- Upload after-fix image
- Add remarks for students

---

## Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Firebase Authentication
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (image uploads)

