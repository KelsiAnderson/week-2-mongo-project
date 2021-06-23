const express = require("express");
const app = express();
const port = 3000;
const router = require("./routers/index");

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
