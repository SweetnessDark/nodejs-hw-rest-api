const contactsSchema = require("../schemas/contactsSchema");
const handleError = require("../middlewares/handleError");
const { model } = require("mongoose");
const {
  schema,
  updateSchema,
  updateFavoriteSchema,
} = require("../schemas/joiSchema");

contactsSchema.post("save", handleError);

const schemas = {
  schema,
  updateSchema,
  updateFavoriteSchema,
};

const Contact = model("contact", contactsSchema);

module.exports = {
  Contact,
  schemas,
};
