import react from 'react';
import { useState, useEffect } from 'react/cjs/react.development';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import DefaultLayout from '../layout/DefaultLayout';
import { searchVideoList } from '../functional/GetData';
import BigThumbnail from '../components/BigThumbnail';

import heroLockingImg from '../images/Hero/Hero_locking.jpg';
import heroPoppingImg from '../images/Hero/Hero_popping.jpg';
import heroWaackingImg from '../images/Hero/Hero_waacking.jpg';

const StyledHero = styled.div`
    height: 60vh;
    background-image: url(${(props) => {
        if (props.heroStyle === 'locking') return heroLockingImg;
        else if (props.heroStyle === 'popping') return heroPoppingImg;
        else if (props.heroStyle === 'waacking') return heroWaackingImg;
        else return 'none';
    }});
    background-position: center 0;
    background-size: cover;
    filter: saturate(60%);

    & > h1 {
        position: absolute;
        left: 50%;
        bottom: 0;
    }
`;

const StyledTitle = styled.h1`
    transform: translate(-50%, 50%);
    font-size: 5rem;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.1rem;
`;

const StyledIntro = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: rgba(225, 225, 225, 0.8);
    text-align: center;

    padding-top: 12vh;
    padding-bottom: 8vh;
`;

const VerticalFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
`;
function Style() {
    const [videoList, setVideoList] = useState([]);
    let { keyword } = useParams();

    useEffect(() => searchVideoList(keyword, null, setVideoList), []);

    return (
        <DefaultLayout>
            <StyledHero heroStyle={keyword.toLowerCase()}>
                <StyledTitle>{keyword[0].toUpperCase() + keyword.slice(1)}</StyledTitle>
            </StyledHero>
            <StyledIntro>This is an brief introduction of the style .</StyledIntro>
            <VerticalFlexBox>
                {videoList.map((video) => (
                    <BigThumbnail
                        imageURL={video.snippet.thumbnails.high.url}
                        title={video.snippet.title}
                        channelTitle={video.snippet.channelTitle}
                        videoId={video.id.videoId}
                        publishedDate={video.snippet.publishedAt}
                        keyword={keyword}
                    />
                ))}
            </VerticalFlexBox>
        </DefaultLayout>
    );
}

export default Style;
