const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User is Active");
});

const users = [
  { username: "Shudip", email: "shudip@gmail.com", id: 1 },
  { username: "Pramila", email: "pramila@gmail.com", id: 2 },
  { username: "Rishi", email: "rishi@gmail.com", id: 3 },
  { username: "Prottusha", email: "protussha@gmail.com", id: 4 },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("New User Added", req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`User is using port ${port}`);
});
