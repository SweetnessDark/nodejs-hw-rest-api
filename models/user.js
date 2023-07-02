const handleError = require("../middlewares/handleError");
const { model } = require("mongoose");

const userSchema = require("../schemas/userSchema");

userSchema.post("save", handleError);

const User = model("user", userSchema);

module.exports = User;
