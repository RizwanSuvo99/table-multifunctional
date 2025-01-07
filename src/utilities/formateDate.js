export function formatDate(dateString) {
  // Create a new Date object from the given string
  const date = new Date(dateString);

  // Get day, month, and year
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
  const year = date.getFullYear();

  // Return the formatted date as dd-mm-yyyy
  return `${day}-${month}-${year}`;
}
