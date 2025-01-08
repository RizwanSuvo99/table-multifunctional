import React, { useState } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ headers, data }) => {
  const [selectedRows, setSelectedRows] = useState([]); // State to track selected rows
  const [sortConfig, setSortConfig] = useState(null); // State for sorting configuration
  const [sortedData, setSortedData] = useState(data); // State for sorted data

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((item) => item.id)); // Select all rows
    } else {
      setSelectedRows([]); // Deselect all rows
    }
  };
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id)); // Remove if already selected
    } else {
      setSelectedRows([...selectedRows, id]); // Add if not selected
    }
  };
  const isRowSelected = (id) => selectedRows.includes(id);

  // Handle Sorting
  const handleSort = (header) => {
    let direction = "asc"; // Default to ascending
    if (sortConfig?.key === header && sortConfig.direction === "asc") {
      direction = "desc"; // Toggle to descending
    }

    const sorted = [...data].sort((a, b) => {
      const key = header.toLowerCase().replace(/\s+/g, "_"); // Match keys like 'Created At' -> 'created_at'
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ key: header, direction });
  };

  return (
    <div className="p-4">
      <table className="min-w-full bg-[#19191E] text-white rounded-lg overflow-hidden">
        <TableHeader
          headers={headers}
          selectedRows={selectedRows}
          handleSelectAll={handleSelectAll}
          handleSort={handleSort}
          sortConfig={sortConfig}
          data={data}
        />
        <TableBody
          data={sortedData}
          isRowSelected={isRowSelected}
          handleRowSelect={handleRowSelect}
        />
      </table>
    </div>
  );
};

export default Table;
