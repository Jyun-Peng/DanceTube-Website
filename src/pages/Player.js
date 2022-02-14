import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import styled from 'styled-components';
import FlexBox from '../layout/FlexBox';
import { getVideo } from '../functional/GetData';
import formatter from '../functional/formatter';

const StatisticsSection = styled(FlexBox)`
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.0625rem solid var(--gray);
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
    const [fetchState, setFetchState] = useState({ message: '', ok: true });
    let { videoId } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        getVideo(videoId, setVideo, setFetchState);
    }, [videoId]);
    useEffect(() => {
        if (!fetchState.ok) navigate(process.env.PUBLIC_URL + '/not-found/' + fetchState.message);
    }, [fetchState]);

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
