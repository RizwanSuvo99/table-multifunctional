import { useEffect, useRef, useState } from 'react';

const FilterDropdown = ({
  header,
  filters,
  onFilterChange,
  toggleFilterDropdown,
}) => {
  const [filterValue, setFilterValue] = useState(filters[header] || '');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleFilterDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleFilterDropdown]);

  const handleFilterKeyPress = (e) => {
    if (e.key === 'Enter') {
      toggleFilterDropdown(null);
    }
  };

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-64 bg-[#f1d25b] text-black shadow-xl rounded-lg z-10 transition-all duration-300 opacity-100"
      style={{ animation: 'fadeIn 0.3s ease-in-out' }}
    >
      <div>
        <input
          type="text"
          placeholder={`Filter ${header}`}
          className="w-full rounded-lg shadow-sm focus:outline-none text-sm bg-[#f1d25b] placeholder:text-gray p-4"
          value={filters[header] || ''}
          onChange={(e) => onFilterChange(header, e.target.value)}
          onKeyDown={handleFilterKeyPress} // Close on Enter
        />
      </div>
    </div>
  );
};

export default FilterDropdown;
