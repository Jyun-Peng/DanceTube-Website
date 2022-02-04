import { data } from 'autoprefixer';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Player from './pages/Player';
import Style from './pages/Style';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/player/:style/:videoId" element={<Player />} />
                <Route path="/style/:style" element={<Style />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
