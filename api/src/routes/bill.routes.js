const express = require("express");
const router = express.Router();

const {
  getAllBills,
  getBillById,
  createBill,
  deleteBillById,
  updateBillById,
} = require("../controller/bill.controller");

router.get("/", getAllBills);
router.get("/:id", getBillById);
router.post("/", createBill);
router.put("/:id", updateBillById);
router.delete("/", deleteBillById);

module.exports = router;
