import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';

describe('Navigation Bar test', () => {
  it('renders an heading in the navbar', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders an navigation tag in the navbar', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const headingElement = screen.getByRole('navigation');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders an heading in the navbar with a text content', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const headingElement = screen.getByTestId('heading');
    expect(headingElement).toHaveTextContent('WORLD COVID REPORT');
  });

  it('renders an heading in the navbar with a text content', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const headingElement = screen.getByText(/WORLD COVID REPORT/i);
    expect(headingElement).toBeInTheDocument();
  });
});
