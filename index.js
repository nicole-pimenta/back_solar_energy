const express = require("express");
const calcRoute = require("./src/routes/calc.route");

const app = express();
app.use(express.json());

app.use("/calculo", calcRoute);

const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
