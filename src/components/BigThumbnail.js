import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 40%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
    filter: saturate(80%);
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);

    background-color: #545454;
`;

const ThumbnailTitle = styled.div`
    flex: 1 1 auto;
    padding: 1.5rem 1rem;

    & > h3 {
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.2;
        color: #fefefe;
        overflow: hidden;
        margin-bottom: 0.5rem;
    }

    & > h4 {
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.2;
        color: rgba(225, 225, 225, 0.8);
        overflow: hidden;
    }

    & > p {
        font-size: 0.9rem;
        color: rgba(225, 225, 225, 0.8);
        margin-bottom: 0.75rem;
    }
`;

function BigThumbnail({ imageURL = '', title = '', description = '', videoId = '', publishedDate = '' }) {
    publishedDate = publishedDate.split('T')[0];
    return (
        <Link to={`/player/${videoId}`} style={{ display: 'inline-block', width: '100%' }}>
            <StyledContainer>
                <StyledImage src={imageURL} alt="image" />
                <ThumbnailTitle>
                    <p>{`發布日期：${publishedDate}`}</p>
                    <h3>{title}</h3>
                    <h4>{description}</h4>
                </ThumbnailTitle>
            </StyledContainer>
        </Link>
    );
}

export default BigThumbnail;
