import { useEffect, useState } from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layout/DefaultLayout';
import Thumbnail from '../components/Thumbnail';
import Button from '../components/Button';
import { searchVideoList } from '../functional/GetData';
import FlexBox from '../layout/FlexBox';

const ThumbnailContainer = styled.div`
    flex-shrink: 0;
    width: calc(33.33333% - 0.33333rem);

    @media (max-width: 768px) {
        width: calc(50% - 0.25rem);
    }

    @media (max-width: 480px) {
        width: calc(100%);
    }
`;

const StyledFlexBox = styled(FlexBox)`
    overflow-x: overlay;
    padding-bottom: 1rem;
    width: 100%;
`;

function Section({ title }) {
    const [videoList, setVideoList] = useState([]);
    const keyword = title.toLowerCase();

    //Fetch youtube video
    useEffect(() => searchVideoList(keyword, null, setVideoList), []);

    return (
        <div className="pt-4">
            <div className="flex justify-between items-center py-2 mb-4">
                <h3 className="text-xl text-white font-bold">{title}</h3>
                <Button text="more" url={`/style/${keyword}`} />
            </div>

            <StyledFlexBox gap="0.5rem">
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
            </StyledFlexBox>
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
