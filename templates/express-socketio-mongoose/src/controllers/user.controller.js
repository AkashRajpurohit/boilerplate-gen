const User = require('../models/User');

const getAllUsers = async () => {
  try {
    const allUsers = await User.find({});

    return allUsers;
  } catch (e) {
		console.error(e)
    return null;
  }
};

module.exports = {
	getAllUsers
}