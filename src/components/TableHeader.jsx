import React from "react";

const TableHeader = ({ headers, handleSort, sortConfig }) => {
  return (
    <thead>
      <tr className="bg-gray-800">
        <th className="p-4">
          <input type="checkbox" className="h-4 w-4" />
        </th>
        {headers.map((header, idx) => (
          <th
            key={idx}
            onClick={() => handleSort(header)}
            className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide cursor-pointer"
          >
            {header}
            <span className="ml-2">
              {sortConfig?.key === header ? (
                sortConfig.direction === "asc" ? (
                  <span>▲</span>
                ) : (
                  <span>▼</span>
                )
              ) : (
                <span className="text-gray-400">▲▼</span> // Default arrows
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
