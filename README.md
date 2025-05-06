# ⚡ Dockerized Full-Stack Web App

A production-ready full-stack web application built with **React (Vite)** and **Express.js**, containerized using **Docker** for scalable and consistent deployment.

> 💼 Designed for DevOps and Fullstack job portfolios. Easily deployable on any system using Docker Compose.

---

## 🚀 Features

- 🔧 React + Vite frontend
- ⚙️ Express.js backend API
- 📦 Dockerized with multi-container setup
- 🔄 API call tested with inter-container networking
- 🔐 Secure `CORS`, `proxy`, and caching configurations

---

## 📸 Demo
![image](https://github.com/user-attachments/assets/d86e3d73-d2f3-460a-85b7-53c7d5342643)

---

## 🧱 Tech Stack

| Layer        | Tech                      |
| ------------ | ------------------------- |
| Frontend     | React + Vite              |
| Backend      | Node.js + Express.js      |
| API Calls    | Fetch API                 |
| Container    | Docker + Docker Compose   |
| Others       | HTML, CSS, JavaScript     |

---

## 🐳 Docker Setup

### Clone & Run

```
git clone https://github.com/Jenish-Patel31/dockerized-fullstack-app.git
cd dockerized-fullstack-app
docker-compose up --build
```

### App runs on:
```
- Frontend: http://localhost:5173
- Backend: http://localhost:5000
```

### API Example
```
fetch("http://localhost:5000/hello")
  .then(res => res.json())
  .then(data => console.log(data.message));

```


## Deployment Ready
- Add custom domain using Nginx
- Easily deploy to platforms like:
  - Render
  - Railway
  - DigitalOcean
  - AWS EC2
 
<p align="center">
  <img src="https://img.shields.io/badge/React-Vite-6e40c9?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Backend-Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/API-Fetch-ffdd57?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Containerized-Docker-2396ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/DevOps-Ready-00b894?style=for-the-badge" />
</p>

