const { Table } = require("../models/models");

exports.addTable = async (tableData) => {
  try {
    const table = await Table.create(tableData);
    return table;
  } catch (error) {
    throw new Error("Failed to add table");
  }
};
