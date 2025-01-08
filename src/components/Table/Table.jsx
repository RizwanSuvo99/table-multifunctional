import React, { useState } from 'react';
import TableBody from '../TableBody/TableBody';
import TableHeader from '../TableHeader/TableHeader';

const Table = ({ headers, data, filteredData, setFilteredData }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState(null);
  const [filters, setFilters] = useState({});

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(data.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const isRowSelected = (id) => selectedRows.includes(id);

  const handleSort = (header) => {
    let direction = 'asc';
    if (sortConfig?.key === header && sortConfig.direction === 'asc') {
      direction = 'desc';
    }

    const sorted = [...data].sort((a, b) => {
      const key = header.toLowerCase().replace(/\s+/g, '_');
      if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
      return 0;
    });

    setFilteredData(sorted);
    setSortConfig({ key: header, direction });
  };

  const handleFilterChange = (header, value) => {
    const updatedFilters = {
      ...filters,
      [header]: value,
    };

    setFilters(updatedFilters);

    const filtered = data.filter((item) => {
      return Object.keys(updatedFilters).every((key) => {
        const fieldValue = item[key.toLowerCase().replace(/\s+/g, '_')];
        return String(fieldValue)
          .toLowerCase()
          .includes(updatedFilters[key]?.toLowerCase() || '');
      });
    });

    setFilteredData(filtered);
  };

  return (
    <div className="p-4">
      <table className="bg-[#19191E] text-white rounded-lg overflow-hidden min-h-40">
        <TableHeader
          headers={headers}
          selectedRows={selectedRows}
          handleSelectAll={handleSelectAll}
          handleSort={handleSort}
          sortConfig={sortConfig}
          data={data}
          onFilterChange={handleFilterChange}
          filters={filters}
        />
        <TableBody
          data={filteredData || data}
          isRowSelected={isRowSelected}
          handleRowSelect={handleRowSelect}
        />
      </table>
    </div>
  );
};

export default Table;
