const { User } = require("../models/models");
exports.UserFindByOne = async (telephone) => {
  return await User.findOne({ where: { telephone } });
};

exports.addUser = async (userData) => {
  return await User.create(userData);
};
