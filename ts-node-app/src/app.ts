import express from "express";
import goodbyeRoutes from "./routes/goodbye.routes";

const app = express();

app.use(express.json());
app.use(goodbyeRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});