/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Countries = (props) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const { countries, flag } = props;
  let newArray = [...countries];
  const [countryFilter, setCountryFilter] = useState([]);
  useEffect(() => {
    setCountryFilter(countries);
  }, [countries]);
  const handleSearch = (e) => {
    setSearch(e.target.value.trim());
    newArray = countries.filter((country) => country.name.toLowerCase().includes(e.target.value));
    setCountryFilter(newArray);
  };

  return (
    <>
      <div className="flex mx-auto w-10/12 justify-center">

        <input type="text" className="mx-auto w-1/2 my-5 py-3 px-5 rounded-full text-black outline-0" placeholder="search for a country" value={search} onChange={handleSearch} />
      </div>
      <div className="flex-wrap my-5 grid grid-cols-2 md:grid-cols-3 bg-blue-900">
        {countryFilter.map((country, i) => (
          <div className={i % 2 !== 1 ? 'abcd  md:bg-blue-700 cursor-pointer duration-150 hover:bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-95 active:scale-95 active:bg-blue-800' : 'md:bg-blue-800 cursor-pointer duration-150 hover:bg-gradient-to-r from-blue-900 to-blue-500 hover:scale-95 active:scale-95 active:bg-blue-700 abcd'} onClick={() => navigate(`covid-info?iso=${country.iso}`)} key={country.name}>
            <div className="flex flex-col items-end items-between m-5 p-5">
              <div><FiArrowRightCircle /></div>
              {flag && flag.map((flag) => {
                if (flag.cioc === country.iso
                  || flag.cca3 === country.iso) {
                  return <div key={flag.cca3}>{flag.flag}</div>;
                }
                return null;
              })}
              <p>
                Country:
                {' '}
                {' '}
                {country.name}
              </p>
              <p>
                ISO code:
                {' '}
                {' '}

                {country.iso}
              </p>
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default Countries;

Countries.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      iso: PropTypes.string,
    }),
  ).isRequired,
  flag: PropTypes.arrayOf(
    PropTypes.shape({
      cioc: PropTypes.string,
      cca3: PropTypes.string,
    }),
  ).isRequired,
};
