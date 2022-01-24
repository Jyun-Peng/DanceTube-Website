import react, { useEffect, useState } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { searchVideo } from '../functional/SearchVideo';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Thumbnail from '../components/Thumbnail';
import DefaultContainer from '../layout/DefaultContainer';

function Section({ title }) {
    const [videoList, setVideoList] = useState([]);
    const keyword = title.toLowerCase();

    useEffect(() => searchVideo(keyword, null, setVideoList), []);

    return (
        <div className="pb-7">
            <DefaultContainer>
                <div className="flex justify-between items-center px-4 py-2 mb-4">
                    <h3 className="text-xl text-white font-bold">{title}</h3>
                    <Button text="more" search={title.toLowerCase()} />
                </div>

                <div>
                    {videoList.length > 0 && (
                        <Thumbnail
                            imageURL={videoList[0].snippet.thumbnails.high.url}
                            title={videoList[0].snippet.title}
                            videoId={videoList[0].id.videoId}
                            publishedDate={videoList[0].snippet.publishedAt}
                        />
                    )}
                </div>
            </DefaultContainer>
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
