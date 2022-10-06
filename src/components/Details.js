import { PropTypes } from 'prop-types';
import React from 'react';

const Details = (props) => {
  const { reports } = props;
  return (
    <div>
      {reports.map((report) => (
        <div className="flex flex-col border-2 mx-2 bg-blue-900 my-3" key={report.state}>
          <p className="text-center my-3">{report.state}</p>
          <div className="bg-blue-800 flex justify-between p-5 duration-75 scale-100 hover:scale-95">
            <p>Confirmed Cases 👫 </p>
            <p>{report.confirmed}</p>
          </div>
          <div className="bg-blue-500 flex justify-between p-5 duration-75 scale-100 hover:scale-95">
            <p>Report Date ⏱️</p>
            <p>{report.date}</p>
          </div>
          <div className="bg-blue-800 flex justify-between p-5 duration-75 scale-100 hover:scale-95">
            <p>Deaths ⚰️</p>
            <p>{report.deaths}</p>
          </div>
          <div className="bg-blue-500 flex justify-between p-5 duration-75 scale-100 hover:scale-95">
            <p>Fatality Rate</p>
            <p>
              {report.fatality_rate}
              %
            </p>
          </div>
          <div className="bg-blue-800 flex justify-between p-5 duration-75 scale-100 hover:scale-95">
            <p>Last Update ⌛</p>
            <p>{report.last_update}</p>
          </div>
          <div className="bg-blue-500 flex justify-between p-5 duration-75 scale-100 hover:scale-95">
            <p>Active Cases 👨‍👩‍👦 </p>
            <p>{report.active}</p>
          </div>
          <div className="bg-blue-800 flex justify-between p-5 duration-75 scale-100 hover:scale-95">
            <p>Recovered 👨‍👩‍👦 ❤️‍🩹</p>
            <p>{report.recovered}</p>
          </div>
        </div>
      )) }
    </div>
  );
};

export default Details;

Details.propTypes = {
  reports: PropTypes.arrayOf(
    PropTypes.shape({
      recovered: PropTypes.number,
      active: PropTypes.number,
      last_update: PropTypes.string,
      fatality_rate: PropTypes.number,
      deaths: PropTypes.number,
      date: PropTypes.string,
      confirmed: PropTypes.number,
      state: PropTypes.string,
    }),
  ).isRequired,

};
