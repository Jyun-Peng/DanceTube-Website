import react from 'react';
import { searchVideo } from '../functional/SearchVideo';

function NavBar({ dropdown }) {
    return (
        <header className="flex justify-between items-center px-4 py-2 shadow-[0_4px_6px_0px_rgba(0,0,0,0.2)] fixed w-80 mx-auto top-0 bg-black">
            <h3 className="text-xl text-white font-bold">DanceTube</h3>

            <div className="flex">{dropdown && <div className="text-white">style</div>}</div>
        </header>
    );
}

export default NavBar;
