const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());
const fs = require("fs");

app.post("/add-user", (req, res) => {
  const newUser = req.body;
  console.log(newUser);

  fs.readFile("data.json", (error, data) => {
    if (error) {
      console.log("Error in reading file");
    } else {
      const jsonFile = JSON.parse(data.toString());
      jsonFile.users.push(newUser);
      fs.writeFile("data.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added successfully");
        }
      });
    }
  });
  res.status(200);
  res.send("User added successfully");
});

app.post("/read-new-user", (req, res) => {});

app.listen(3001, () => {
  console.log("Server is listening at port 3001");
});
