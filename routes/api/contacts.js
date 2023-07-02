const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validBody, validId } = require("../../middlewares");

const { schemas } = require("../../models/contacts");

const router = express.Router();

router.get("/", ctrl.listContacts);

router.get("/:contactId", validId, ctrl.getContactById);

router.post("/", validBody(schemas.addSchema), ctrl.addContact);

router.delete("/:contactId", validId, ctrl.removeContact);

router.put(
  "/:contactId",
  validId,
  validBody(schemas.updateSchema),
  ctrl.updateContact
);

router.patch(
  "/:contactId",
  validId,
  validBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
