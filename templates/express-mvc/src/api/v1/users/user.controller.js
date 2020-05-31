const User = require('./user.model');

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({});

    res.json({ users: allUsers });
  } catch (e) {
    // Pass the error to the errorHandler Middleware
    next(e);
  }
};

module.exports = {
  getAllUsers
};
