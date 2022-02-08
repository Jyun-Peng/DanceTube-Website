import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatter from '../functional/formatter';

const StyledImage = styled.img`
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    filter: saturate(80%);
`;

const StyledContainer = styled.div`
    width: 100%;
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
    background-color: var(--gray-bg);
`;

const ThumbnailTitle = styled.div`
    padding: 1rem;

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
        color: rgba(225, 225, 225, 0.8);
        margin-bottom: 0.25rem;
    }
`;

function Thumbnail({ imageURL = '', title = '', videoId = '', publishedDate = '', keyword = '' }) {
    return (
        <Link to={`/player/${keyword}/${videoId}`} style={{ width: '100%' }}>
            <StyledContainer>
                <StyledImage src={imageURL} alt="image" />
                <ThumbnailTitle>
                    <h3>{title}</h3>
                </ThumbnailTitle>
            </StyledContainer>
        </Link>
    );
}

export default Thumbnail;
