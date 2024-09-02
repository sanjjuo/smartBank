import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Config/db.js';
import depositRoute from './Routes/depositRoute.js';
import authRoute from './Routes/authRoute.js';
import withDrawRoute from './Routes/withDrawRoute.js';
import balanceRoute from './Routes/balanceRoute.js';
import transactionRoute from './Routes/transactionRoute.js';
import adminRouter from './Routes/AdminRoute.js';


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
app.use('/api/transaction', [
  depositRoute,
  withDrawRoute,
  balanceRoute,
  transactionRoute
]);
app.use('/api/admin', adminRouter);


app.get('/', (req, res) => {
  res.send('API is running');
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
