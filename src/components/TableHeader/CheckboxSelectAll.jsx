const CheckboxSelectAll = ({ handleSelectAll, selectedRows, data }) => (
  <th className="px-14 py-4">
    <input
      type="checkbox"
      onChange={handleSelectAll}
      checked={selectedRows.length === data.length}
      className="h-4 w-4"
    />
  </th>
);

export default CheckboxSelectAll;
