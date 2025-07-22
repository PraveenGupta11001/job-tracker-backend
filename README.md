# Job Application Tracker – Backend API

A RESTful API built with **Express.js** and **MongoDB Atlas** to manage job applications. This project demonstrates clean backend architecture, modular API development, and OpenAPI documentation via Swagger UI. Suitable for full-stack learning and portfolio use.

---

## Why This Project?

This project simulates a real-world job application tracking system, designed to:
- Demonstrate backend development using **Node.js**, **Express.js**, and **MongoDB**.
- Show modular code structure with controllers, routes, and models.
- Provide API documentation using **Swagger UI**.
- Serve as a base for future features like authentication, Redis caching, and Dockerization.

---

## Tech Stack

- **Backend Framework**: Express.js (Node.js 20.x)
- **Database**: MongoDB Atlas (Cloud-hosted)
- **ODM**: Mongoose
- **API Docs**: Swagger UI (`/docs` endpoint)
- **Other**: dotenv, cors

---

## How to Run

### 1. Clone Repository

```bash
git clone https://github.com/PraveenGupta11001/job-tracker-backend
cd job-tracker-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the project root:

```bash
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
```

### 4. Generate Swagger Documentation (One-time)

```bash
node swagger.js
```

*(Regenerate after adding new endpoints.)*

### 5. Start Server

For development (auto-reload):
```bash
npm run dev
```

For production:
```bash
npm start
```

### 6. Access API Docs

After running:
```
http://localhost:5000/docs
```

---

## 📂 Project Structure

```
src/
├── config/
│   └── db.js
├── controllers/
│   └── applicationController.js
├── models/
│   └── Application.js
├── routes/
│   └── applicationRoutes.js
├── index.js
.env
swagger.js
swagger-output.json
```

---

## 📖 API Endpoints

| Method | Endpoint                | Description                     |
|--------|-------------------------|---------------------------------|
| GET    | /applications           | API greeting route              |
| POST   | /applications/create    | Create a new job application    |
| GET    | /applications/get_all   | Get all job applications        |
| GET    | /applications/get/:id   | Get application by ID           |
| PUT    | /applications/update/:id| Update an existing application  |
| DELETE | /applications/delete/:id| Delete an application by ID     |

> Full request/response documentation is available in Swagger UI.

---

## 🛠 Future Improvements

- JWT-based authentication.
- Redis cache for GET requests.
- Pagination and search filters.
- Docker support for deployment.
- Automated CI/CD pipelines.

---

## 📄 License

This project is open source and free to use.