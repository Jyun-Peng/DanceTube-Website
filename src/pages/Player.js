import { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import DefaultContainer from '../layout/DefaultContainer';
import FlexBox from '../layout/FlexBox';
import BigThumbnail from '../components/BigThumbnail';
import { getVideo, searchVideoList } from '../functional/GetData';
import formatter from '../functional/formatter';

const DescriptionSection = styled.div`
    padding: 1.5rem 0;
    & h3 {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 0.8rem;
    }

    & p {
        font-size: 1rem;
        color: var(--gray-text);
    }
`;

const StyledIframe = styled.iframe`
    width: 100%;
    height: 60vh;
`;

function EmbeddedVideo({ videoId }) {
    return (
        <StyledIframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></StyledIframe>
    );
}
function Player() {
    const [videoList, setVideoList] = useState([]);
    const [video, setVideo] = useState(null);
    let { style, videoId } = useParams();

    // useEffect(() => {
    //     searchVideoList(style, null, setVideoList);
    // }, []);

    useEffect(() => {
        getVideo(videoId, setVideo);
    }, [videoId]);

    return (
        <DefaultLayout>
            <EmbeddedVideo videoId={videoId} />
            <DescriptionSection>
                <h3>{video && video.snippet.title}</h3>
                <FlexBox spaceBetween>
                    <p>上傳日期：{video && formatter.formatDate(video.snippet.publishedAt)}</p>
                    <FlexBox>
                        <p>觀看次數：{video && formatter.formatNumber(video.statistics.viewCount)}</p>
                        <p>按讚次數：{video && formatter.formatNumber(video.statistics.likeCount)}</p>
                    </FlexBox>
                </FlexBox>
            </DescriptionSection>
        </DefaultLayout>
    );
}

export default Player;
