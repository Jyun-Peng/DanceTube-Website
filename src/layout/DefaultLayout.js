import react from 'react';
import NavBar from '../components/NavBar';

function DefaultLayout({ children, dropdown }) {
    return (
        <div className="bg-black mx-auto max-w-xs pt-[4.25rem]">
            <NavBar dropdown={dropdown} />
            {children}
        </div>
    );
}

export default DefaultLayout;
