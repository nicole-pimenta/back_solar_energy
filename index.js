import express from "express";
import connectDatabase from "./src/database/db.js";
import calcRoute from "./src/routes/calc.router.js";

const app = express();
app.use(express.json());

connectDatabase();

app.use("/calculo", calcRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
