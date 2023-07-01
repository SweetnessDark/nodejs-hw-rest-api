const express = require("express");

const ctrl = require("../../controllers/auth");
const { validBody } = require("../../middlewares");
const authenticate = require("../../middlewares/authenticate");

const router = express.Router();

const { schemas } = require("../../schemas/joiUserSchema");

router.post("/register", validBody(schemas.registerSchema), ctrl.register);

router.post("/login", validBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
