import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layout/DefaultLayout';
import Thumbnail from '../components/Thumbnail';
import Button from '../components/Button';
import { searchVideoList } from '../functional/GetData';
import FlexBox from '../layout/FlexBox';
import Carousel from '../components/Carousel';

function Section({ title }) {
    const [videoList, setVideoList] = useState([]);
    const keyword = title.toLowerCase();

    //Fetch youtube video
    useEffect(() => searchVideoList(keyword, null, setVideoList), []);

    return (
        <div className="pt-4">
            <div className="flex justify-between items-center py-2 mb-4">
                <h3 className="text-xl text-white font-bold">{title}</h3>
                <Button text="more" url={`/style/${keyword}/2021`} />
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
