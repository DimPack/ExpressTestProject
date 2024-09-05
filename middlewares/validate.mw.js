const yup = require("yup");
const validationSchemaUser = yup.object({
    name: yup.string().trim().required(),
    email: yup.string().trim().email().required(),
    password: yup.string().trim().required(),
    isMale: yup.boolean(),
  });

module.exports = async (req, res, next) => {
    try {
      const valideteBody = await validationSchemaUser.validate(req.body);
      next();
    } catch (error) {
      res.status(400).send(error.message);
    }
  };