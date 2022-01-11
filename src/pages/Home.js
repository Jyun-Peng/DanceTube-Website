import react, { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { searchVideo } from '../functional/SearchVideo';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Carousel from '../components/Carousel';

function Section({ title }) {
    const [data, setData] = useState([]);
    const keyword = title.toLowerCase();

    useEffect(() => {
        // searchVideo(keyword, null, setData);
    }, []);

    return (
        <div className="pb-7">
            <div className="flex justify-between items-center px-4 py-2 mb-4">
                <h3 className="text-xl text-white font-bold">{title}</h3>
                <Button text="more" search={title.toLowerCase()} />
            </div>
            <Carousel />
        </div>
    );
}

function Home() {
    return (
        <DefaultLayout>
            <Section title="Locking" />
            <Section title="Popping" />
            <Section title="Waacking" />
        </DefaultLayout>
    );
}

export default Home;
