import axios from 'axios';
import React from 'react';

// BEGIN (write your solution here)
import { useState, useEffect } from 'react';

const Autocomplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [countries, setCountries] = useState([]);

  const fetchCountries = async (term) => {
    if (term.length === 0) {
      setCountries([]);
      return;
    }

    try {
      const res = await axios.get('/countries', { params: { term } });
      setCountries(res.data);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchCountries(inputValue);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Country"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
      {inputValue && countries.length > 0 && (
        <ul>
          {countries.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
// END
