import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import applicationRoutes from './routes/applicationRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../swagger-output.json' assert { type: 'json' };


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger setup
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
app.use('/applications', applicationRoutes);

// DB Connection to start the server
connectDB()
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Go to: http://localhost:${PORT}`);
});
