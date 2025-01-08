import { useCallback, useEffect, useState } from 'react';

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null); // Success state
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null); // Reset error state

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const result = await response.json();
      setData(result); // Store the API data
    } catch (err) {
      setError(err.message); // Store the error
    } finally {
      setLoading(false); // Stop loading
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { response: data, loading, error, refetch: fetchData };
};

export default useFetch;