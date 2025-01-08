import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      onSearch(value); 
    }, 500);

    setDebounceTimer(timer);
  };

  return (
    <div className="flex items-center justify-center w-full p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="w-full max-w-md p-3 border rounded-lg shadow-md bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Search;