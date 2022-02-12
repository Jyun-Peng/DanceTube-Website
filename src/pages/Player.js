import { useState, useEffect, useRef } from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FlexBox from '../layout/FlexBox';
import { getVideo, searchVideoList } from '../functional/GetData';
import formatter from '../functional/formatter';

const StatisticsSection = styled(FlexBox)`
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.0625rem solid var(--gray-bg);
`;
const DescriptionSection = styled.div`
    color: var(--gray-text);
`;

const StyledIframe = styled.iframe`
    width: 100%;
    height: 60vh;
    margin-bottom: 1.5rem;
`;

const StyledTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 0.8rem;
`;

const StyledPara = styled.p`
    font-size: 1rem;
    color: var(--gray-text);
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
        <DefaultLayout>
            <StyledIframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></StyledIframe>
            <StyledTitle>{video && video.snippet.title}</StyledTitle>
            <StatisticsSection spaceBetween>
                <StyledPara>上傳日期：{video && formatter.formatDate(video.snippet.publishedAt)}</StyledPara>
                <FlexBox gap={'1rem'}>
                    <StyledPara>觀看次數：{video && formatter.formatNumber(video.statistics.viewCount)}</StyledPara>
                    <StyledPara>按讚次數：{video && formatter.formatNumber(video.statistics.likeCount)}</StyledPara>
                </FlexBox>
            </StatisticsSection>
            <DescriptionSection>{video && handleDescription(video.snippet.description)}</DescriptionSection>
        </DefaultLayout>
    );
}

export default Player;
