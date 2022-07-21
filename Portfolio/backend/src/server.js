const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/messages", (req, res) => {
  let sql = "SELECT * FROM users";
  const sqlValues = [];
  connection.query(sql, sqlValues, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send(`An error occurred: ${err.message}`);
    } else {
      res.json(result);
    }
  });
});

app.post("/api/messages", (req, res) => {
  const { firstname, lastname, email,message } = req.body;
  connection.query(
    "INSERT INTO users (firstname, lastname, email, message) VALUES (?, ?, ?)",
    [firstname, lastname, email],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving the user");
      } else {
        const id = result.insertId;
        const createdUser = { id, firstname, lastname, email,message };
        res.status(201).json(createdUser);
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
