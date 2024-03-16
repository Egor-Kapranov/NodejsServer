const userService = require("../services/userService");
const { userValidation } = require("../middleware/userValidation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request } = require("express");

const generateJwt = (id, telephone, role) => {
  return jwt.sign({ id, telephone, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class userController {
  async addUser(req, res) {
    try {
      const { error } = userValidation(req.body);
      if (error) {
        return res.status(400).json({ error: error });
      }
      const { username, telephone, password, role } = req.body;
      const hashPassword = await bcrypt.hash(password, 2);
      const user = await userService.addUser({
        username,
        telephone,
        password: hashPassword,
        role,
      });
      const token = generateJwt(user.id, user.telephone, user.role);
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async Login(req, res) {
    try {
      const { telephone, password } = req.query;
      const user = await userService.findUserByTelephone(telephone);
      const comparePassword = bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return res.status(403).json({ message: "No password?" });
      }
      const token = generateJwt(user.id, user.telephone, user.role);
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async Auth(req, res) {
    try {
      const token = generateJwt(req.user.id, req.user.telephone, req.user.role);
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new userController();
