import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import DetailsList from '../components/DetailsList';
import '@testing-library/jest-dom';
import React from 'react';

describe('Test for DetailList component', () => {

        it('renders the exact same elements', () => {
        const detailsList = render(
          <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <DetailsList iso={"CHN"}/>
                </Provider>
            </BrowserRouter>
          </React.StrictMode>
        );
        expect(detailsList).toMatchSnapshot();
      })
    
    // it('renders a paragraph', () => {
    //     render(
    //     <React.StrictMode>
    //         <BrowserRouter>
    //             <Provider store={store}>
    //                 <DetailsList iso="something"/>
    //             </Provider>
    //         </BrowserRouter>
    //     </React.StrictMode>
    //     );
    //     const headingElement = screen.getByText(/something/i)
    //     expect(headingElement).toBeInTheDocument()
    //   });
})