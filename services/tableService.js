const tableRepository = require("../repositories/tableRepository");

exports.addTable = async (tableData) => {
  try {
    const table = await tableRepository.addTable(tableData);
    return table;
  } catch (error) {
    throw new Error("Failed to add table");
  }
};
