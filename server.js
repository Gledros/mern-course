import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

// DB & authentication
import connectDB from "./db/connect.js";

// Routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobsRoutes.js";

// Middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
