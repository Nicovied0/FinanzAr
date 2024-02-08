const Bill = require("../models/Bill.model");

async function getAllBills(req, res) {
  try {
    const bills = await Bill.find();
    return res.status(200).json(bills);
  } catch (error) {
    console.error("Error fetching bills:", error.message);
    return res.status(500).json({ error: "Error fetching bills" });
  }
}

async function getBillById(req, res) {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ error: "Bill not found" });
    }
    return res.status(200).json(bill);
  } catch (error) {
    console.error("Error fetching bill by ID:", error.message);
    return res.status(500).json({ error: "Error fetching bill by ID" });
  }
}

async function createBill(req, res) {
  try {
    const { billNumber, amount, date, organizationFrom, ulrToPdf } = req.body;
    const newBill = new Bill({
      billNumber,
      amount,
      date,
      organizationFrom,
      ulrToPdf,
    });
    await newBill.save();
    return res.status(201).json(newBill);
  } catch (error) {
    console.error("Error creating bill:", error.message);
    return res.status(500).json({ error: "Error creating bill" });
  }
}

async function deleteBillById(req, res) {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(404).json({ error: "Bill not found" });
    }
    await bill.remove();
    return res.status(204).end();
  } catch (error) {
    console.error("Error deleting bill:", error.message);
    return res.status(500).json({ error: "Error deleting bill" });
  }
}

async function updateBillById(req, res) {
  try {
    const { billNumber, amount, date } = req.body;
    const updatedBill = await Bill.findByIdAndUpdate(
      req.params.id,
      {
        billNumber,
        amount,
        date,
      },
      { new: true }
    );
    if (!updatedBill) {
      return res.status(404).json({ error: "Bill not found" });
    }
    return res.status(200).json(updatedBill);
  } catch (error) {
    console.error("Error updating bill:", error.message);
    return res.status(500).json({ error: "Error updating bill" });
  }
}

module.exports = {
  getAllBills,
  getBillById,
  createBill,
  deleteBillById,
  updateBillById,
};
