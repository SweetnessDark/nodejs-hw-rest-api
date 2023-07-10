const catchAsync = require("../utils/catchAsync");

const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const getCurrent = require("./getCurrent");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  register: catchAsync(register),
  login: catchAsync(login),
  logout: catchAsync(logout),
  getCurrent: catchAsync(getCurrent),
  updateAvatar: catchAsync(updateAvatar),
  resendVerifyEmail: catchAsync(resendVerifyEmail),
  verifyEmail: catchAsync(verifyEmail),
};
