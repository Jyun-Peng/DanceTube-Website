import { data } from 'autoprefixer';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Player from './pages/Player';
import Style from './pages/Style';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/player" element={<Player />} />
                <Route path="/style" element={<Style />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
