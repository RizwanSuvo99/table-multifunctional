import React from 'react';

const Pagination = ({ perPage, currentPage, onPerPageChange }) => {
  return (
    <div className="flex items-center justify-between mt-4 text-white">
      {/* Rows per page */}
      <div>
        <label className="mr-2">Rows per page:</label>
        <select
          value={perPage}
          onChange={(e) => onPerPageChange(Number(e.target.value))}
          className="p-1 bg-gray-800 text-white rounded"
        >
          {[5, 10, 15, 20].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Pagination Buttons */}
      <div className="flex space-x-2">
        <button
          //   onClick={() => handlePageChange(1)}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded"
        >
          Start
        </button>
        <button
          //   onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <span className="flex items-center justify-center">{currentPage}</span>
        <button
          //   onClick={() => handlePageChange(currentPage + 1)}
          //   disabled={currentPage === totalPages}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded disabled:bg-gray-500"
        >
          Next
        </button>
        <button
          //   onClick={() => handlePageChange(totalPages)}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded"
        >
          End
        </button>
      </div>
    </div>
  );
};

export default Pagination;
