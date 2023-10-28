import express from "express";
import cors from "cors";
import movies from "./api/movies.route.js";

//create the server
const app = express();

//attach the middleware
app.use(cors());
app.use(express.json()); //enables the server to read and accept JSON in a request's body

//specify the routes
app.use("/app/v1/movies", movies);
app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

//exports that app as a module
export default app;
