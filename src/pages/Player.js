import { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import DefaultContainer from '../layout/DefaultContainer';
import FlexBox from '../layout/FlexBox';
import BigThumbnail from '../components/BigThumbnail';
import { getVideo, searchVideoList } from '../functional/GetData';
import formatter from '../functional/formatter';

const StyledIframe = styled.iframe`
    width: min(56rem, 100vw);
    height: 60vh;
    margin: 0 auto;
`;

const VerticalFlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
`;

const VideoSection = styled.div``;

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

function EmbeddedVideo({ videoId }) {
    return (
        <StyledIframe
            className="max-w-4xl"
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

    useEffect(() => {
        searchVideoList(style, null, setVideoList);
    }, []);

    useEffect(() => {
        getVideo(videoId, setVideo);
    }, [videoId]);

    return (
        <DefaultLayout>
            <VideoSection>
                <EmbeddedVideo videoId={videoId} />
                <DescriptionSection>
                    <DefaultContainer>
                        <h3>{video && video.snippet.title}</h3>
                        <FlexBox spaceBetween>
                            <p>上傳日期：{video && formatter.formatDate(video.snippet.publishedAt)}</p>
                            <FlexBox>
                                <p>觀看次數：{video && formatter.formatNumber(video.statistics.viewCount)}</p>
                                <p>按讚次數：{video && formatter.formatNumber(video.statistics.likeCount)}</p>
                            </FlexBox>
                        </FlexBox>
                    </DefaultContainer>
                </DescriptionSection>
            </VideoSection>
            <VerticalFlexBox>
                {videoList.map((video) => (
                    <BigThumbnail
                        imageURL={video.snippet.thumbnails.high.url}
                        title={video.snippet.title}
                        description={video.snippet.description}
                        videoId={video.id.videoId}
                        publishedDate={video.snippet.publishedAt}
                        keyword={style}
                    />
                ))}
            </VerticalFlexBox>
        </DefaultLayout>
    );
}

export default Player;
