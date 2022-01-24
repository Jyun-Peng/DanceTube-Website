import react from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DefaultContainer from '../layout/DefaultContainer';

const StyledIframe = styled.iframe`
    width: 640px;
    height: 360px;
    margin: 0 auto;
`;
function EmbeddedVideo() {
    let { videoId } = useParams();
    console.log(videoId);
    return (
        <DefaultContainer>
            <StyledIframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></StyledIframe>
        </DefaultContainer>
    );
}
function Player() {
    return (
        <DefaultLayout>
            <EmbeddedVideo />
        </DefaultLayout>
    );
}

export default Player;
