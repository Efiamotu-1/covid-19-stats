import React from 'react';
import { useSelector } from 'react-redux';
import Countries from './Countries';

const CountriesList = () => {
  const countries = useSelector((state) => state.country.countries);
  const flag = useSelector((state) => state.flags.flag);
  return (
    <div>
      <Countries countries={countries} flag={flag} />
    </div>
  );
};

export default CountriesList;
