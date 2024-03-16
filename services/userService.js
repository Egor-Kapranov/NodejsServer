const userRepository = require("../repositories/userRepository");
exports.findUserByTelephone = async (telephone) => {
  return await userRepository.UserFindByOne(telephone);
};

exports.addUser = async (userData) => {
  return await userRepository.addUser(userData);
};
