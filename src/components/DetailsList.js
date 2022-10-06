import { PropTypes } from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import Details from './Details';

const DetailsList = (props) => {
  const statesReports = useSelector((state) => state.stateStats.stateDetails);
  const country = useSelector((state) => state.country.countries);
  const { iso } = props;

  return (
    <div>
      {country && country.forEach((eachCountry) => {
        if (eachCountry.iso === iso) {
          return (
            <div className="text-center p-5" key={eachCountry.name} data-testid="covid">
              {eachCountry.name}
              {' '}
              <p> Covid Cases </p>
            </div>
          );
        }
        return null;
      })}

      <Details reports={statesReports} />
    </div>
  );
};

export default DetailsList;

DetailsList.propTypes = {
  iso: PropTypes.string.isRequired,
};
