import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Thumbnail from '../components/Thumbnail';
import Button from '../components/Button';
import { searchVideoList } from '../functional/GetData';
import Carousel from '../components/Carousel';

function Section({ title }) {
    const [videoList, setVideoList] = useState([]);
    const [fetchState, setFetchState] = useState({ message: '', ok: true });
    const keyword = title.toLowerCase();

    let navigate = useNavigate();

    //Fetch youtube video
    useEffect(() => {
        searchVideoList(keyword, null, 5, setVideoList, setFetchState);
    }, []);

    useEffect(() => {
        if (!fetchState.ok) navigate(process.env.PUBLIC_URL + '/not-found/' + fetchState.message);
    }, [fetchState]);

    return (
        <div className="pt-8">
            <div className="flex justify-between items-center py-2 mb-4">
                <h3 className="text-xl text-white font-bold">{title}</h3>
                <Button text="more" url={process.env.PUBLIC_URL + `/style/${keyword}/2021`} color="purple" />
            </div>

            <Carousel
                itemList={videoList.map((video) => (
                    <Thumbnail
                        imageURL={video.snippet.thumbnails.high.url}
                        title={video.snippet.title}
                        videoId={video.id.videoId}
                        publishedDate={video.snippet.publishedAt}
                        keyword={keyword}
                    />
                ))}
            />
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
