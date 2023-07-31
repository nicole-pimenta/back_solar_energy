const express = require("express");
const calcRoute = require("./src/routes/calc.route");
const app = express();
const connectDatabase = require("./src/database/db");
app.use(express.json());

connectDatabase();

app.use("/calculo", calcRoute);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
