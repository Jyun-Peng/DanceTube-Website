import { useState, useEffect } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FlexBox from '../layout/FlexBox';
import { getVideo } from '../functional/GetData';
import formatter from '../functional/formatter';

const StatisticsSection = styled(FlexBox)`
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.0625rem solid var(--gray-bg);
`;

const StyledIframe = styled.iframe`
    width: 100%;
    aspect-ratio: 16/9;
    margin-bottom: 1.5rem;
`;

const StyledTitle = styled.h3`
    color: var(--white);
    margin-bottom: 0.8rem;
`;

function Player() {
    const [video, setVideo] = useState(null);
    let { videoId } = useParams();

    useEffect(() => {
        getVideo(videoId, setVideo);
    }, [videoId]);

    const handleDescription = function (text) {
        const textArr = text.split('\n');
        const result = [];
        textArr.forEach((text) => {
            result.push(text);
            result.push(<br />);
        });

        return result;
    };

    return (
        <DefaultLayout button>
            <StyledIframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></StyledIframe>
            <StyledTitle>{video && video.snippet.title}</StyledTitle>
            <StatisticsSection spaceBetween>
                <p>上傳日期：{video && formatter.formatDate(video.snippet.publishedAt)}</p>
                <FlexBox gap={'1rem'}>
                    <p>觀看次數：{video && formatter.formatNumber(video.statistics.viewCount)}</p>
                    <p>按讚次數：{video && formatter.formatNumber(video.statistics.likeCount)}</p>
                </FlexBox>
            </StatisticsSection>
            <p>{video && handleDescription(video.snippet.description)}</p>
        </DefaultLayout>
    );
}

export default Player;
