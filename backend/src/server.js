import express from "express"
import notesRoutes from "./notes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// connectDB();

app.use(express.json()); // middleware to parse JSON request bodies

app.use(rateLimiter); // Apply the rate limiter middleware to all routes

// simple custom middleware to log request method and url
// app.use((req, res, next) => {
//     console.log(`request: ${req.method} & 'request url': ${req.url}`);
//     next();
// });


app.use('/api/notes', notesRoutes);

connectDB().then(() => {
      app.listen(PORT, () => {
         console.log(`Server started on Port: ${PORT}`);
      });  
  }).catch((error) => {console.error("Error starting server:", error)}); 




