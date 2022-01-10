import react from 'react';
import NavBar from '../components/NavBar';

function DefaultLayout({ children }) {
    return (
        <div className="bg-black mx-auto max-w-xs">
            <NavBar />
            {children}
        </div>
    );
}

export default DefaultLayout;
