const { Contact } = require("../models/contacts");
const catchAsync = require("../utils/catchAsync");
const httpError = require("../utils/httpError");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Contact.find({ owner }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner");
  res.json(data);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw httpError(404, "Not Found");
  }
  return res.json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw httpError(404, "Not Found");
  }
  return res.json({
    message: "Delete success",
  });
};

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  res.status(201).json(result);
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
