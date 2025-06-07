import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectToDb from './db/db.js';
import userRoutes from './routes/user.routes.js'; 

const app = express();
connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_, res) => {
  res.send('Hello,');
});

// Register user routes
app.use('/api/users', userRoutes);

export default app;