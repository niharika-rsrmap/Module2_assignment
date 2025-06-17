import express from 'express';
import userRoutes from './routes/userRoutes'; // adjust the path if needed

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use your router under a path prefix, for example "/api"
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
