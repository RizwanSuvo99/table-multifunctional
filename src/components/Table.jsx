import React from 'react';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({ headers, data }) => {
  return (
    <div className="p-4">
      <table className="min-w-full bg-[#19191E] text-white rounded-lg overflow-hidden">
        <TableHeader headers={headers} />
        <TableBody data={data}/>
      </table>
    </div>
  );
};

export default Table;
