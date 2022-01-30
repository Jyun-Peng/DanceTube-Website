import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    overflow: hidden;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
`;

const ThumbnailTitle = styled.div`
    flex: 1 1 auto;
    padding: 1rem;
    background-color: #545454;

    & > h3 {
        height: 2.4rem;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        color: #fefefe;
        overflow: hidden;
    }

    & > p {
        font-size: 0.9rem;
        color: #dddddd;
        margin-bottom: 0.25rem;
    }
`;

function BigThumbnail({ imageURL = '', title = '', videoId = '', publishedDate = '' }) {
    publishedDate = publishedDate.split('T')[0];
    return (
        <Link to={`/player/${videoId}`} style={{ display: 'inline-block', width: '100%' }}>
            <StyledContainer>
                <img src={imageURL} alt="image" className="w-[40%] aspect-video object-cover object-center" />
                <ThumbnailTitle>
                    <p>{`發布日期：${publishedDate}`}</p>
                    <h3>{title}</h3>
                </ThumbnailTitle>
            </StyledContainer>
        </Link>
    );
}

export default BigThumbnail;
