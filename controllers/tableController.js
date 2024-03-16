const { tableValidation } = require("../middleware/tableValidation");

const tableService = require("../services/tableService");

exports.addTable = async (req, res) => {
  try {
    const { error } = tableValidation(req.body);
    if (error) {
      return res.status(400).json({ error: error });
    }
    const tableData = req.body;
    const table = await tableService.addTable(tableData);
    return res.status(201).json(table);
  } catch (error) {
    return res.status(500).json({ error: "Failed to add table" });
  }
};
