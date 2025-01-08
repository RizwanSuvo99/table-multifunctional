import React, { useState } from 'react';
import CheckboxSelectAll from './CheckboxSelectAll';
import FilterDropdown from './FilterDropdown';
import SortHeader from './SortHeader';

const TableHeader = ({
  headers,
  handleSort,
  sortConfig,
  handleSelectAll,
  selectedRows,
  data,
  onFilterChange,
  filters,
}) => {
  const [filterDropdown, setFilterDropdown] = useState(null);

  const toggleFilterDropdown = (header) => {
    setFilterDropdown(filterDropdown === header ? null : header);
  };

  return (
    <thead>
      <tr className="bg-gray-800">
        <CheckboxSelectAll
          handleSelectAll={handleSelectAll}
          selectedRows={selectedRows}
          data={data}
        />
        {headers.map((header, idx) => (
          <th
            key={idx}
            className="px-14 py-4 text-left text-sm font-medium uppercase tracking-wide relative"
          >
            <div className="flex items-center gap-4">
              <SortHeader
                header={header}
                handleSort={handleSort}
                sortConfig={sortConfig}
              />
              <button
                onClick={() => toggleFilterDropdown(header)}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
            {filterDropdown === header && (
              <FilterDropdown
                header={header}
                filters={filters}
                onFilterChange={onFilterChange}
                toggleFilterDropdown={toggleFilterDropdown}
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
