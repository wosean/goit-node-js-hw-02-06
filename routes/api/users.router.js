const express = require("express");

const ctrl = require("../../controllers/user");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/users");


const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getCurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, ctrl.updateUserSubscription);

module.exports = router;