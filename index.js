import express from "express";
import connectDatabase from "./src/database/db.js";
import calcRoute from "./src/routes/calc.router.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

connectDatabase();

app.use("/calculo", calcRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
