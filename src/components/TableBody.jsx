import React from "react";
import TableRow from "./TableRow";

const TableBody = ({ data}) => {
  return (
    <tbody>
      {data?.map((row, idx) => (
        <TableRow key={idx} row={row}/>
      ))}
    </tbody>
  );
};

export default TableBody;
