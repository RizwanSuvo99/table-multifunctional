import React from 'react';

const TableHeader = ({ headers, handleSelectAll, selectedRows, data }) => {
  return (
    <thead>
      <tr className="bg-gray-800">
        <th className="p-4">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={selectedRows.length === data.length}
            className="h-4 w-4"
          />
        </th>
        {headers.map((item, idx) => (
          <th
            key={idx}
            className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide"
          >
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
