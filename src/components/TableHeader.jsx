import React from 'react';

const TableHeader = ({headers}) => {
  return (
    <thead>
      <tr className="bg-gray-800">
        {headers.map((item,idx) => (
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
