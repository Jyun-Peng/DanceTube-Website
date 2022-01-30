import react from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import DefaultLayout from '../layout/DefaultLayout';
import { searchVideo } from '../functional/SearchVideo';
import BigThumbnail from '../components/BigThumbnail';

const VerticalFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
`;
function Style() {
    const [videoList, setVideoList] = useState([]);
    let { keyword } = useParams();

    useEffect(() => searchVideo(keyword, null, setVideoList), []);

    return (
        <DefaultLayout>
            <VerticalFlexBox>
                {videoList.map((video) => (
                    <BigThumbnail
                        imageURL={video.snippet.thumbnails.high.url}
                        title={video.snippet.title}
                        videoId={video.id.videoId}
                        publishedDate={video.snippet.publishedAt}
                    />
                ))}
            </VerticalFlexBox>
        </DefaultLayout>
    );
}

export default Style;
