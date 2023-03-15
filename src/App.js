import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMission } from './redux/mission/missionSlice';
import Profile from './components/Profile';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import Navigation from './components/Navbar';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMission());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/myprofile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
