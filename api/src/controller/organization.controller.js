const Organization = require("../models/Organization.model");

async function getAllOrganizations(req, res) {
  try {
    const organizations = await Organization.find();
    return res.status(200).json(organizations);
  } catch (error) {
    console.error("Error fetching organizations:", error.message);
    return res.status(500).json({ error: "Error fetching organizations" });
  }
}

async function getOrganizationById(req, res) {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ error: "Organization not found" });
    }
    return res.status(200).json(organization);
  } catch (error) {
    console.error("Error fetching organization by ID:", error.message);
    return res.status(500).json({ error: "Error fetching organization by ID" });
  }
}

async function createOrganization(req, res) {
  try {
    const { name, email, phone } = req.body;
    const newOrganization = new Organization({
      name,
      email,
      phone,
    });
    await newOrganization.save();
    return res.status(201).json(newOrganization);
  } catch (error) {
    console.error("Error creating organization:", error.message);
    return res.status(500).json({ error: "Error creating organization" });
  }
}

async function deleteOrganizationById(req, res) {
  try {
    const organization = await Organization.findById(req.params.id);
    if (!organization) {
      return res.status(404).json({ error: "Organization not found" });
    }
    await organization.remove();
    return res.status(204).end();
  } catch (error) {
    console.error("Error deleting organization:", error.message);
    return res.status(500).json({ error: "Error deleting organization" });
  }
}

module.exports = {
  deleteOrganizationById,
  createOrganization,
  getAllOrganizations,
  getOrganizationById,
};
