const SortHeader = ({ header, handleSort, sortConfig }) => (
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
);

export default SortHeader;
