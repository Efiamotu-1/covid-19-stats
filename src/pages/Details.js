import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import DetailsList from '../components/DetailsList';
import { fetchCovidReport } from '../redux/statistics/covidStatsSlice';

const Details = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const iso = searchParams.get('iso');
  useEffect(() => {
    dispatch(fetchCovidReport(iso));
  });
  return (
    <div><DetailsList iso={iso} /></div>
  );
};

export default Details;
