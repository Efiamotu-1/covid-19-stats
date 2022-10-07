import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings, FiChevronLeft } from 'react-icons/fi';

const today = new Date().toLocaleString();

const Navbar = () => (
  <nav className="flex justify-between py-2 bg-gray-00 bg-blue-700 items-center border-b border-b-gray-200">
    <div className="bg-white p-4 rounded-full mx-5">
      <NavLink to="/">
        <FiChevronLeft className="text-blue-600" />
      </NavLink>
    </div>

    <div className="font-bold">
      <h1 data-testid="heading">
        WORLD COVID REPORT
        {' '}
        {' '}
        {today}
      </h1>
    </div>

    <div className="mx-5">
      <div className="flex space-x-2">

        <div className="bg-white p-4 rounded-full ">
          <FiSettings className="text-blue-600" />
        </div>

        <div className="bg-white p-4 rounded-full ">
          <NavLink to="/covid-info">
            <FaMicrophone className="text-blue-600" />
            {' '}
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
