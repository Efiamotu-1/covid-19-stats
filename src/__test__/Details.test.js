import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import '@testing-library/jest-dom';
import React from 'react';
import Details from '../components/Details';

describe('Test for Details component', () => {

        it('renders the exact same elements', () => {
        const details = render(
          < React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <Details reports={[]}/>
                </Provider>
            </BrowserRouter>
          </React.StrictMode>
        );
        expect(details).toMatchSnapshot();
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