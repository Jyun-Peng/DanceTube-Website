import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    font-size: 5rem;
    font-weight: 600;
    color: var(--white);
    letter-spacing: 0.1rem;
    /* text-align: center; */
    padding: 28vh 0 2rem 0;
`;

const StyledIntro = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
    color: rgba(225, 225, 225, 0.8);
    /* text-align: center; */
    margin-bottom: 6rem;
`;

const VerticalFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BigThumbnailContainer = styled.div`
    width: 100%;
    padding: 0.5rem 0;

    border-right: 0.25rem solid transparent;
    transition: border 0.1s;
    @media (hover: hover) {
        &:hover {
            transition: none;
            border-color: var(--purple);
        }
    }
`;

function Style() {
    const [videoList, setVideoList] = useState([]);
    const [fetchState, setFetchState] = useState({ message: '', ok: true });
    let { style, year } = useParams();
    let navigate = useNavigate();

    useEffect(() => searchVideoList(style, year, 20, setVideoList, setFetchState), [style, year]);
    useEffect(() => {
        if (!fetchState.ok) navigate(process.env.PUBLIC_URL + '/not-found/' + fetchState.message);
    }, [fetchState]);

    return (
        <DefaultLayout dropdown>
            {/* <StyledHero heroStyle={style.toLowerCase()} /> */}
            <StyledTitle>{style[0].toUpperCase() + style.slice(1)}</StyledTitle>
            <StyledIntro>There will be a brief decription of {style} here.</StyledIntro>
            <VerticalFlexBox>
                {videoList.map((video, index) => (
                    <BigThumbnailContainer key={index}>
                        <BigThumbnail
                            index={index}
                            imageURL={video.snippet.thumbnails.high.url}
                            title={video.snippet.title}
                            channelTitle={video.snippet.channelTitle}
                            videoId={video.id.videoId}
                            publishedDate={video.snippet.publishedAt}
                            keyword={style}
                        />
                    </BigThumbnailContainer>
                ))}
            </VerticalFlexBox>
        </DefaultLayout>
    );
}

export default Style;
