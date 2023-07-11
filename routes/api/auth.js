const express = require("express");

const ctrl = require("../../controllers/index");
const { validBody, authenticate, upload } = require("../../middlewares");

const router = express.Router();

const { schemas } = require("../../schemas/joiUserSchema");

router.post("/register", validBody(schemas.registerSchema), ctrl.register);

router.post("/login", validBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
  "./avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
