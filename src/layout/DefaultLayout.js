import react from 'react';
import NavBar from '../components/NavBar';

function DefaultLayout({ children, dropdown }) {
    return (
        <div className="bg-black mx-auto  pt-[4.25rem] overflow-hidden">
            <NavBar dropdown={dropdown} />
            {children}
        </div>
    );
}

export default DefaultLayout;
