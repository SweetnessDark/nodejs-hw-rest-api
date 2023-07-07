const handleError = require("./handleError");
const validId = require("./validId");
const validBody = require("./validBody");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  handleError,
  validBody,
  validId,
  authenticate,
  upload,
};
