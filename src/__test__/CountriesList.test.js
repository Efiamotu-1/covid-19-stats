import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CountriesList from '../components/CountriesList';
import store from '../redux/store';

describe('Countries List test', () => {
  it('renders the exact same elements', () => {
    const countriesList = render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <CountriesList />
          </Provider>
        </BrowserRouter>
      </React.StrictMode>,
    );
    expect(countriesList).toMatchSnapshot();
  });
});
