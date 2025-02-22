import React, { useEffect, useState } from 'react';
import ErrorToaster from './components/ErrorToaster';
import Loader from './components/Loader';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Table from './components/Table/Table';
import useFetch from './hooks/useFetch';

const App = () => {
  const [perPage, setPerPage] = useState(10);
  const [searchStr, setSearchStr] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [apiUrl, setApiUrl] = useState(
    `https://api.razzakfashion.com/?paginate=10&search=`
  );

  const [filteredData, setFilteredData] = useState(null);

  const { response, loading, error, refetch } = useFetch(apiUrl);

  const headers = [
    'Name',
    'Email',
    'Email Verified At',
    'Created At',
    'Updated At',
  ];

  const totalPages = response?.last_page || 1;

  // Handle search input change
  const handleSearch = (query) => {
    setSearchStr(query);
    setApiUrl(
      `https://api.razzakfashion.com/?paginate=${perPage}&search=${query}`
    );
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Handle rows per page change
  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setApiUrl(
      `https://api.razzakfashion.com/?paginate=${newPerPage}&search=${searchStr}`
    );
    setCurrentPage(1); // Reset to the first page when rows per page change
  };

  // Handle page change
  const handlePageChange = (action) => {
    if (action === 'next' && response?.next_page_url) {
      setFilteredData(null);
      setApiUrl(response.next_page_url);
      setCurrentPage((prev) => prev + 1);
    } else if (action === 'prev' && response?.prev_page_url) {
      setFilteredData(null);
      setApiUrl(response.prev_page_url);
      setCurrentPage((prev) => prev - 1);
    } else if (action === 'start') {
      setFilteredData(null);
      setApiUrl(
        `https://api.razzakfashion.com/?paginate=${perPage}&search=${searchStr}`
      );
      setCurrentPage(1);
    } else if (action === 'end') {
      setFilteredData(null);
      setApiUrl(
        `https://api.razzakfashion.com/?paginate=${perPage}&search=${searchStr}&page=${totalPages}`
      );
      setCurrentPage(totalPages);
    }
  };

  useEffect(() => {
    refetch();
  }, [apiUrl]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-white">User Information</h1>

      {/* Search component */}
      <Search onSearch={handleSearch} />

      {/* Loading State */}
      {loading && <Loader />}

      {/* Error State */}
      {error && <ErrorToaster message={error} />}

      {/* Success State */}
      {response?.data && (
        <Table
          headers={headers}
          data={response.data}
          filteredData={filteredData}
          setFilteredData={setFilteredData}
        />
      )}

      {/* Pagination Component */}
      {response?.data && (
        <Pagination
          perPage={perPage}
          currentPage={currentPage}
          totalPages={totalPages}
          onPerPageChange={handlePerPageChange}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default App;
