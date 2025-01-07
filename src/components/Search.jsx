import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);

  // Handle change in the search input
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Clear the previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set a new timer to call the onSearch function after 500ms delay
    const timer = setTimeout(() => {
      onSearch(value); // Call the parent onSearch function after the delay
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
