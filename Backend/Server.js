import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import authRoute from './Routes/auth.Route.js';
import transactionRoute from './Routes/transaction.Route.js';

dotenv.config();

// database connection
connectDB();

// app config
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

// api endpoints
app.use('/api/auth', authRoute);
app.use('/api/transaction', transactionRoute);

app.get('/', (req, res) => {
  res.send('API is running');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
