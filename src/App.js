import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import Navigation from './components/Navbar';

function App() {
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
