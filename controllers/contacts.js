const { Contact } = require("../models/contacts");
const catchAsync = require("../utils/catchAsync");
const httpError = require("../utils/httpError");

const listContacts = async (req, res) => {
  const data = await Contact.find({}, "-createdAt -updateAt");
  return res.JSON(data);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw httpError(404, "Not Found");
  }
  return res.JSON(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw httpError(404, "Not Found");
  }
  return res.JSON({
    message: "Delete success",
  });
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  return res.status(201).JSON(result);
};

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404, "Not Found");
  }
  return res.json(result);
};

const updateFavorite = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw httpError(404, "Not Found");
  }
  return res.json(result);
};

module.exports = {
  listContacts: catchAsync(listContacts),
  getContactById: catchAsync(getContactById),
  removeContact: catchAsync(removeContact),
  addContact: catchAsync(addContact),
  updateContact: catchAsync(updateContact),
  updateFavorite: catchAsync(updateFavorite),
};
