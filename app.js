const express = require("express");
const quizRoutes = require("./quizRoutes");

const app = express(); //middleware
const port = 3000;

app.use(express.json());
app.use("/api", quizRoutes); //adding the routes

app.use(express.json());

app.listen(port, () => {
  console.log("Server runs on port 3000");
});
