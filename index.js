import express from 'express';
import connectDB from './config/db.js';

import quotesRouter from './routes/quoteRoutes.js'; // Use default import
import cors from "cors";

const port = process.env.PORT || 3001;  
const app = express();

app.use(express.json());
app.use(cors());
connectDB();


app.use('/api/quotes', quotesRouter);

app.post("/api/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Active on port ${port}`);
});
