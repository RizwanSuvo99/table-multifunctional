import React, { useEffect, useRef, useState } from 'react';

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
  const dropdownRef = useRef(null);

  const toggleFilterDropdown = (header) => {
    setFilterDropdown(filterDropdown === header ? null : header);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setFilterDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterKeyPress = (e) => {
    if (e.key === 'Enter') {
      setFilterDropdown(null); // Close dropdown when pressing Enter
    }
  };

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
        {headers.map((header, idx) => (
          <th
            key={idx}
            className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wide relative"
          >
            <div className="flex items-center gap-4">
              <div
                onClick={() => handleSort(header)}
                className="cursor-pointer flex items-center"
              >
                {header}
                <span className="ml-2">
                  {sortConfig?.key === header ? (
                    sortConfig.direction === 'asc' ? (
                      <i className="fa-solid fa-arrow-up"></i>
                    ) : (
                      <i className="fa-solid fa-arrow-down"></i>
                    )
                  ) : (
                    <span className="text-gray-400">
                      <i className="fa-solid fa-arrow-up"></i>
                      <i className="fa-solid fa-arrow-down"></i>
                    </span>
                  )}
                </span>
              </div>
              <button
                onClick={() => toggleFilterDropdown(header)}
                className="ml-2 text-gray-400 hover:text-white"
              >
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>

            {/* Filter Dropdown */}
            {filterDropdown === header && (
              <div
                ref={dropdownRef}
                className="absolute top-full left-0 mt-2 w-64 bg-[#f1d25b] text-black shadow-xl rounded-lg z-10 transition-all duration-300 opacity-100 transform scale-100"
                style={{ animation: 'fadeIn 0.3s ease-in-out' }}
              >
                <div className="p-4">
                  <input
                    type="text"
                    placeholder={`Filter ${header}`}
                    className="w-full rounded-lg shadow-sm focus:outline-none text-sm bg-[#f1d25b] placeholder:text-gray"
                    value={filters[header] || ''}
                    onChange={(e) => onFilterChange(header, e.target.value)}
                    onKeyDown={handleFilterKeyPress} // Close on Enter
                  />
                </div>
              </div>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;