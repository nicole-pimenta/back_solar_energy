const express = require("express");
const app = express();
const connectDatabase = require("./src/database/db");
const calcRoute = require("./src/routes/calc.route");
app.use(express.json());
connectDatabase();

app.use("/calculo", calcRoute);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
