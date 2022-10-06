import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CasesToday from '../components/CasesToday';
import store from '../redux/store'

describe('Cases today test', () => {
    it('renders the exact same elements', () => {
        const casesToday = render(
          <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <CasesToday />
                </Provider>
            </BrowserRouter>
          </React.StrictMode>
        );
        expect(casesToday).toMatchSnapshot();
      })

  it('renders an heading element', () => {
    render(
    <BrowserRouter>
    <Provider store={store}>
      <CasesToday />
    </Provider>
    </BrowserRouter>
    );
    const headingElement = screen.getByRole("heading")
    expect(headingElement).toBeTruthy
  });

  it('renders an image', () => {
    render(
    <BrowserRouter>
    <Provider store={store}>
      <CasesToday />
    </Provider>
    </BrowserRouter>
    );
    const imageElement = screen.getByRole("img")
    expect(imageElement).toBeTruthy()
  });

  it('renders covid data for the whole world', () => {
    render(
    <BrowserRouter>
    <Provider store={store}>
      <CasesToday />
    </Provider>
    </BrowserRouter>
    );
    const textElement = screen.getByText(/covid data for the whole world/i)
    expect(textElement).toBeTruthy()
  })


})