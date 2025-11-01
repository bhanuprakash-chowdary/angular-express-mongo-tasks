# 🧩 Angular + Express + Mongo Task Tracker

A full-stack task tracker built while following **Traversy Media's Angular Crash Course**, extended with **Express.js** and **MongoDB** for persistent data.

---

## 🚀 Project Structure

ANGULAR-CRASH-PROJECT/
├── backend/ # Express + Mongo API (runs on port 5001)
│ ├── server.js
│ ├── models/
│ ├── package.json
│ └── ...
│
├── src/ # Angular frontend (runs on port 4200)
│ ├── app/
│ ├── assets/
│ ├── environments/
│ └── ...
│
├── angular.json
├── package.json # Angular dependencies
├── README.md
└── tsconfig.json


---

## 🧠 Overview

This project demonstrates how Angular communicates with a Node.js + Express backend, which connects to a MongoDB database using **Mongoose**.

- Angular 20+ standalone components  
- FontAwesome for UI icons  
- Express 5 for RESTful API  
- MongoDB Atlas for cloud storage  
- RxJS Observables for reactive data handling  
- Routing for navigation between components  

---

## 🛠️ Setup Instructions

### 1️⃣ Clone this repository
```bash
git clone https://github.com/<your-username>/angular-crash-project.git
cd angular-crash-project
```

### 2️⃣ Install dependencies
Install Angular frontend dependencies
```
npm install
```
Install backend dependencies
```
cd backend
npm install
cd ..
```
### 3️⃣ Configure MongoDB Connection
Create a file named .env inside the backend/ folder:
```
MONGO_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/taskdb"
PORT=5001
```
Replace <username> and <password> with your MongoDB credentials.

### 4️⃣ Run the project

Run both Angular and Express simultaneously from the root directory:

```
npm run dev
```

Angular app → http://localhost:4200

Backend API → http://localhost:5001/api/tasks

Or, start them separately:

# Run Angular only
```
npm run start:frontend
```
# Run backend only
```
npm run start:backend
```

---

## ⚙️ Available Scripts

| Command              | Description                            |
|----------------------|----------------------------------------|
| npm run dev          | Run both Angular & backend together    |
| npm run start:frontend | Start Angular development server      |
| npm run start:backend  | Start Express backend (using nodemon) |
| npm run build          | Build Angular app for production      |

---

## 🌐 API Endpoints

| Method | Endpoint          | Description          |
|---------|------------------|----------------------|
| GET     | /api/tasks        | Get all tasks        |
| GET     | /api/tasks/:id    | Get a task by ID     |
| POST    | /api/tasks        | Add a new task       |
| PUT     | /api/tasks/:id    | Update a task’s reminder |
| DELETE  | /api/tasks/:id    | Delete a task        |

---

# Example Task Object:

{
  "_id": "690591843586974c5385b00d",
  "id": 1,
  "text": "Doctor Appointment",
  "day": "May 5th at 2:30pm",
  "reminder": true
}

---

## 🧩 Angular Features

| Feature | Description |
|----------|-------------|
| Standalone Components | Angular 20+ structure using `imports: []` instead of NgModules |
| Task Service | Handles HTTP calls via HttpClient |
| Router | Supports `/` (Tasks page) and `/about` routes |
| FontAwesome | Integrated for icons using `@fortawesome/angular-fontawesome` |
| Reactive Programming | Observables used for async task fetching and updates |
| Forms | Two-way binding (`[(ngModel)]`) used for adding tasks |

---

## 🧱 Folder Breakdown
### Frontend (Angular)
src/app/
│
├── component/
│   ├── header/
│   ├── footer/
│   ├── tasks/
│   ├── task-item/
│   ├── add-task/
│   └── about/
│
├── services/
│   ├── tasks.service.ts
│   └── ui.service.ts
│
├── app.config.ts
├── app.routes.ts
└── app.ts

### Backend (Express)
backend/
│
├── server.js
├── models/
│   └── Task.js
├── package.json
└── .env

---

## 🧩 Integration Details

- Angular frontend communicates via `HttpClient` to the Express backend (`http://localhost:5001/api/tasks`).  
- Express connects to MongoDB using Mongoose models.  
- Task addition, deletion, and reminder toggling reflect instantly in the UI.  
- Angular Router enables navigation between the Tasks page and About page.  

---

## 🧠 Lessons Covered (Based on Traversy Course)

- Component structure and interaction  
- Event Emitters and property binding  
- Using services and Observables  
- HTTP Client and backend integration  
- Adding and deleting tasks  
- Form handling with ngModel  
- UI toggling and routing  
- Integration with MongoDB (custom addition)  

---

## 📦 Technologies Used

| Category | Technologies |
|-----------|--------------|
| Frontend | Angular 20+, RxJS, FontAwesome |
| Backend | Node.js, Express 5, Mongoose |
| Database | MongoDB Atlas |
| Dev Tools | VS Code, Postman, GitHub |
| Language | TypeScript, JavaScript |

---