import React from 'react';

const Pagination = ({
  perPage,
  currentPage,
  totalPages,
  onPerPageChange,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-between mt-4 text-white">
      <div className="mr-4">
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
      <div className="flex space-x-2">
        <button
          onClick={() => onPageChange('start')}
          disabled={currentPage === 1}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-forward-step rotate-180"></i>
        </button>
        <button
          onClick={() => onPageChange('prev')}
          disabled={currentPage === 1}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <span className="flex items-center justify-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange('next')}
          disabled={currentPage === totalPages}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <button
          onClick={() => onPageChange('end')}
          disabled={currentPage === totalPages}
          className="p-2 bg-gray-700 hover:bg-gray-600 rounded disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          <i className="fa-solid fa-forward-step"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;