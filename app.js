const express = require("express");
const validate = require("./middlewares/validate.mw");
const UserController = require("./controllers/user.controller");

//create application - server
const app = express();
const PORT = 3000;

app.use(express.json());

//Routing
// req- запит
// res - відповідь
app.get("/", (req, res) => {
  res.send("hi!");
});

app.post("/users", validate, UserController.create);
app.put("/users/:userId", validate, UserController.update); // оновити певного користувача
app.delete("/users/:userId", UserController.deleteUser);

app.listen(PORT, () => {
  console.log("app start at port " + PORT);
});
