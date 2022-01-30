import react from 'react';
import NavBar from '../components/NavBar';

function DefaultLayout({ children, dropdown }) {
    return (
        <div className="bg-black mx-auto  overflow-hidden">
            <NavBar dropdown={dropdown} />
            <div className="max-w-4xl mx-auto pt-[2.5rem] pb-[4.25rem]">{children}</div>
        </div>
    );
}

export default DefaultLayout;
