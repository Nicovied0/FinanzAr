const express = require("express");
const router = express.Router();

const {
  createOrganization,
  getAllOrganizations,
  deleteOrganizationById,
  getOrganizationById,
} = require("../controller/organization.controller");

router.post("/", createOrganization);
router.get("/", getAllOrganizations);
router.post("/:id", getOrganizationById);
router.delete("/", deleteOrganizationById);

module.exports = router;
