import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData =(defaultUrl) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [abortController, setAbortController] = useState(undefined);

  const fetchData = async (queryParams = {}, url = defaultUrl) => {
    setIsLoading(true);
    setData(undefined);

    try {
      const newAbortController = new AbortController();
      setAbortController(newAbortController);
      const response = await axios.get(url, {
        params: queryParams,
        signal: newAbortController.signal,
      });
      setData(response.data);
    } catch (err) {
      if (!axios.isCancel(err)) {
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    //cleanup function (cancel requests when leaving page)
    return () => {
      if (abortController) {
        abortController.abort();
      }
    };
  }, [abortController]);

  return { data, isLoading, error, fetchData, setData };
};

export default useFetchData;
