import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Player from './pages/Player';
import Style from './pages/Style';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={process.env.PUBLIC_URL + '/not-found/:message'} element={<NotFound />} />
                <Route path={process.env.PUBLIC_URL + '/player/:style/:videoId'} element={<Player />} />
                <Route path={process.env.PUBLIC_URL + '/style/:style/:year'} element={<Style />} />
                <Route path={process.env.PUBLIC_URL + '/'} element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;
