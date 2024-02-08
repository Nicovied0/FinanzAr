const express = require("express");
const router = express.Router();

const userRoute = require("./user.routes");
const organizationRoute = require("./organization.routes");

router.use("/user", userRoute);
router.use("/organization", organizationRoute);

module.exports = router;
