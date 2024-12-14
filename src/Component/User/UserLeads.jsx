import React, { useState } from "react";
import * as XLSX from "xlsx";

function UserLeads() {
  const [isClick, setIsClick] = useState(false);
  const [columns, setColumns] = useState(["Name", "Job", "Favorite Color"]);
  const [rows, setRows] = useState([]);
  const [newLead, setNewLead] = useState({});

  // Add new column
  const addColumn = () => {
    const columnName = prompt("Enter new column name:");
    if (columnName) {
      setColumns([...columns, columnName]);
      setRows(rows.map((row) => ({ ...row, [columnName]: "" })));
    }
  };

  // Add new row
  const addRow = () => {
    const newRow = {};
    columns.forEach((col) => (newRow[col] = ""));
    setRows([...rows, newRow]);
  };

  // Handle input change for adding single lead
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewLead({ ...newLead, [name]: value });
  };

  // Add single lead
  const addSingleLead = () => {
    setRows([...rows, newLead]);
    setIsClick(false);
    setNewLead({});
  };

  // Export table data to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Leads");
    XLSX.writeFile(workbook, "leads.xlsx");
  };

  // Import data from Excel
  const importFromExcel = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Update rows and columns based on the imported data
        if (jsonData.length > 0) {
          setColumns(Object.keys(jsonData[0]));
          setRows(jsonData);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="overflow-x-auto p-4">
      {/* Buttons */}
      <div className="m-2 flex gap-2">
        <button className="btn btn-primary" onClick={() => setIsClick(true)}>
          Add Single Lead
        </button>
        <button className="btn btn-secondary" onClick={addColumn}>
          Add Column
        </button>
        <button className="btn btn-accent" onClick={addRow}>
          Add Row
        </button>
        <button className="btn btn-success" onClick={exportToExcel}>
          Export to Excel
        </button>

        {/* Import Excel Button */}
        <label className="btn btn-warning cursor-pointer">
          Import Excel
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={importFromExcel}
            className="hidden"
          />
        </label>
      </div>

      {/* Add Single Lead Form */}
      {isClick && (
        <div className="border p-4 mb-4 rounded-lg">
          <h3 className="font-bold mb-2">Add New Lead</h3>
          {columns.map((col, index) => (
            <div key={index} className="mb-2">
              <label className="block font-medium">{col}:</label>
              <input
                type="text"
                name={col}
                value={newLead[col] || ""}
                onChange={handleInputChange}
                className="input input-bordered w-full"
              />
            </div>
          ))}
          <button className="btn btn-primary mt-2" onClick={addSingleLead}>
            Save Lead
          </button>
        </div>
      )}

      {/* Dynamic Table */}
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{rowIndex + 1}</th>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={row[col] || ""}
                    onChange={(e) => {
                      const updatedRows = [...rows];
                      updatedRows[rowIndex][col] = e.target.value;
                      setRows(updatedRows);
                    }}
                    className="input input-sm input-bordered w-full"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserLeads;
