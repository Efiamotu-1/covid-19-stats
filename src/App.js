import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Home from './pages/Home';
import { fetchCountries } from './redux/countries/countriesSlice';
import { fetchflags } from './redux/countries/flagSlice';
import { fetchTodayStats } from './redux/statistics/statsSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodayStats());
    dispatch(fetchCountries());
    dispatch((fetchflags()));
  });
  return (
    <div className="bg-blue-500 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid-info" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
