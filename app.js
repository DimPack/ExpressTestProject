const express = require("express");
const validate = require("./middlewares/validate.mw");

//create application - server
const app = express();
const PORT = 3000;
const users = [];

app.use(express.json());

//Routing
// req- запит
// res - відповідь
app.get("/", (req, res) => {
  res.send("hi!");
});




let count =0; // для прикладу
const create = (req, res) => {
  try {
    const user = req.body;
    user.id = count++;
    delete user.password;
    user.createAt = new Date();
    users.push(user);
    console.log(users);
    
    res.status(201).send(user);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
const update = (req, res) => {
    try {
        res.end();
    } catch (error) {
        res.status(404).send(error.message);
    }
};
deleteUser = (req, res) => {
    try {
        res.end();
    } catch (error) {
        res.status(404).send(error.message);
    }
};

app.post("/users", validate, create);
app.put("/users/0", validate, update); // оновити певного користувача
app.delete("/users/0", deleteUser)

app.listen(PORT, () => {
  console.log("app start at port " + PORT);
});
