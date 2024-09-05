const users = [];
let count =0; // для прикладу

module.exports.create = (req, res) => {
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
module.exports.update = (req, res) => {
    try {
        console.log(req.params);
        res.end('update');
    } catch (error) {
        res.status(404).send(error.message);
    }
};
module.exports.deleteUser = (req, res) => {
    try {
        res.end('delete');
    } catch (error) {
        res.status(404).send(error.message);
    }
};