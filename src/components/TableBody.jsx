import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data, isRowSelected, handleRowSelect }) => {
  
  return (
    <tbody>
      {data?.map((row, idx) => (
        <TableRow
          key={idx}
          row={row}
          isRowSelected={isRowSelected}
          handleRowSelect={handleRowSelect}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
