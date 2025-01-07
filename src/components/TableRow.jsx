import React from 'react';
import { formatDate } from '../utilities/formateDate';
import TableData from './TableData';

const TableRow = ({ row,isRowSelected,handleRowSelect }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
      <td className="p-4">
        <input
          type="checkbox"
          checked={isRowSelected(row.id)}
          onChange={() => handleRowSelect(row.id)}
          className="h-4 w-4"
        />
      </td>
      <TableData value={row.name} />
      <TableData value={row.email} />
      <TableData value={formatDate(row.email_verified_at)} />
      <TableData value={formatDate(row.created_at)} />
      <TableData value={formatDate(row.updated_at)} />
    </tr>
  );
};

export default TableRow;
