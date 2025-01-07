import React from 'react';
import { formatDate } from '../utilities/formateDate';
import TableData from './TableData';

const TableRow = ({ row }) => {
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800 transition">
      <TableData value={row.name} />
      <TableData value={row.email} />
      <TableData value={formatDate(row.email_verified_at)} />
      <TableData value={formatDate(row.created_at)} />
      <TableData value={formatDate(row.updated_at)} />
    </tr>
  );
};

export default TableRow;
