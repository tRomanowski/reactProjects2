import React, { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState([]);

  const fetchMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === 'True') {
        console.log(data);
        setData(data.Search);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
