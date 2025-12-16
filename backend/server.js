import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from './routes/auth.js';
import cookieParser from "cookie-parser";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`)
})