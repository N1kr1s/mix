import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchValue, setSearchValue] = useState('react');
  const [substitude, setSubstitude] = useState(searchValue);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSubstitude(searchValue);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [searchValue]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: {
          query: { search },
        },
      } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          srsearch: substitude,
          format: 'json',
        },
      });
      setResults(search);
    };
    fetchData();
  }, [substitude]);

  const renderResults = results.map((result, index) => {
    return (
      <div className='item' key={result.pageid}>
        <div className='right floated content'>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className='ui button'
          >
            Go
          </a>
        </div>
        <div className='content'>
          <div className='header'>{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className='input'
          />
        </div>
      </div>
      <div className='ui celled list'>{renderResults}</div>
    </div>
  );
};

export default Search;
