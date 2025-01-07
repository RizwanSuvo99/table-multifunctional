import React, { useState } from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ headers, data }) => {
  const [selectedRows, setSelectedRows] = useState([]); // State to track selected rows

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
  return (
    <div className="p-4">
      <table className="min-w-full bg-[#19191E] text-white rounded-lg overflow-hidden">
        <TableHeader headers={headers} selectedRows={selectedRows} handleSelectAll={handleSelectAll} data={data} />
        <TableBody data={data} isRowSelected={isRowSelected} handleRowSelect={handleRowSelect}/>
      </table>
    </div>
  );
};

export default Table;
