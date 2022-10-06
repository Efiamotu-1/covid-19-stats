import React from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import BgImage from '../images/new-bg-removebg-preview.png';

const today = format(new Date(), 'yyyy-MM-dd');

const CasesToday = () => {
  const casesInfo = useSelector((state) => state.stats.statistics);
  const [cases] = casesInfo;
  return (
    <div className="bg-blue-500 grid grid-cols-2  items-center  mx-auto py-3 gap-2" data-testid="new">
      <div className="my-5 mx-2">
        <img src={BgImage} alt="background" />
      </div>
      <div className="flex flex-col my-5 mx-2 justify-center items-center space-y-2">
        <h1 className="underline">
          Covid data for the whole world 🌍
          {today}
        </h1>
        {cases && (
          <>
            {' '}
            <div>
              Total Number of Covid Deaths as of
              {' '}
              {today}
              {' '}

              :
              {' '}

              {cases.deaths}
              {' '}
              ⚰️
            </div>
            <div>
              Total Number of Confirmed 🧾 cases as of
              {' '}
              {today}
              {' '}

              :
              {' '}

              {cases.confirmed}
              {' '}
              👨‍👩‍👦
            </div>
            <div>
              Total Number of Recoveries as of
              {' '}
              {today}
              {' '}

              :
              {' '}

              {cases.recovered}
              {' '}
              👨‍👩‍👦 ❤️‍🩹
            </div>
            <div>
              Total Number of Covid active cases as of
              {' '}
              {today}
              {' '}

              :
              {' '}

              {cases.active}
              {' '}
              👨‍👩‍👦
            </div>
            <div>
              Total Number of Covid fatality rate as of
              {' '}
              {today}
              {' '}

              :
              {' '}

              {cases.fatality_rate}
              %
            </div>
          </>
        ) }

      </div>
    </div>
  );
};

export default CasesToday;
