import react, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layout/DefaultLayout';

import DefaultContainer from '../layout/DefaultContainer';
import Carousel from '../components/Carousel';
import Thumbnail from '../components/Thumbnail';
import Button from '../components/Button';
import { searchVideoList } from '../functional/GetData';
import FlexBox from '../layout/FlexBox';

const ThumbnailContainer = styled.div`
    flex-shrink: 0;
    width: 22rem;
`;

function Section({ title }) {
    const [videoList, setVideoList] = useState([]);
    const keyword = title.toLowerCase();

    //Fetch youtube video
    useEffect(() => searchVideoList(keyword, null, setVideoList), []);

    return (
        <div className="pt-4">
            <DefaultContainer>
                <div className="flex justify-between items-center py-2 mb-4">
                    <h3 className="text-xl text-white font-bold">{title}</h3>
                    <Button text="more" url={`style/${keyword}`} />
                </div>

                <FlexBox className="overflow-x-scroll">
                    {videoList.map((video) => (
                        <ThumbnailContainer>
                            <Thumbnail
                                imageURL={video.snippet.thumbnails.high.url}
                                title={video.snippet.title}
                                videoId={video.id.videoId}
                                publishedDate={video.snippet.publishedAt}
                                keyword={keyword}
                            />
                        </ThumbnailContainer>
                    ))}
                </FlexBox>
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
