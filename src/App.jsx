import React, { useEffect, useState } from 'react';
import ErrorToaster from './components/ErrorToaster';
import Loader from './components/Loader';
import Pagination from './components/Pagination'; // Import the Pagination component
import Search from './components/Search'; // Import the Search component
import Table from './components/Table';
import useFetch from './hooks/useFetch';

const App = () => {
  const [perPage, setPerPage] = useState(10); // Default rows per page
  const [searchStr, setSearchStr] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(null);

  // Use the custom hook to fetch data with perPage and search string
  const { data, loading, error, refetch } = useFetch(
    `https://api.razzakfashion.com/?paginate=${perPage}&search=${searchStr}`
  );

  const headers = [
    'Name',
    'Email',
    'Email Verified At',
    'Created At',
    'Updated At',
  ]; // Table headers

  // Handle search input change
  const handleSearch = (query) => {
    setSearchStr(query);
  };

  // Handle rows per page change
  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
  };

  useEffect(() => {
    refetch();
  }, [perPage, searchStr]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">User Information</h1>

      {/* Search component */}
      <Search onSearch={handleSearch} />

      {/* Loading State */}
      {loading && <Loader />}

      {/* Error State */}
      {error && <ErrorToaster message={error} />}

      {/* Success State */}
      {data && <Table headers={headers} data={data} />}

      {/* Pagination Component */}
      {data && (
        <Pagination
          perPage={perPage}
          currentPage={currentPage}
          onPerPageChange={handlePerPageChange}
        />
      )}
    </div>
  );
};

export default App;
