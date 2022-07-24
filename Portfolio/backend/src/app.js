const path = require("path");
const express = require("express");
const cors = require("cors");
const router = require("./router");


const app = express();



app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  optionsSuccessStatus: 204

   
  })
);


app.use(express.json());

app.use(express.static(path.join(__dirname, "../public")));


app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));


app.use("/api", router);



app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;
