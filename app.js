const express = require("express");
const yup = require("yup");
//create application - server
const app = express();
const PORT = 3000;

const users = [];

//Routing
// req- запит
// res - відповідь
app.get("/", (req, res) => {
  res.send("hi!");
});

const parse = express.json(); //next()

const validete = async (req, res, next) => {
  const validationSchemaUser = yup.object({
    name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    password: yup.string().trim().required(),
    isMale: yup.boolean(),
  });
  try {
    const valideteBody = await validationSchemaUser.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
};
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
app.post("/users", parse, validete, create);
app.put("/users/0", parse, validete, create); // оновити певного користувача
//app.delete()

app.listen(PORT, () => {
  console.log("app start at port " + PORT);
});
