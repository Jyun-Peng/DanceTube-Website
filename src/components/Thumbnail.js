import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 100%;
    height: 12rem;
    object-fit: cover;
    object-fit: center;
    filter: saturate(80%);
`;

const StyledContainer = styled.div`
    width: 22rem;
    flex: 1 0 auto;
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
`;

const ThumbnailTitle = styled.div`
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
        color: rgba(225, 225, 225, 0.8);
        margin-bottom: 0.25rem;
    }
`;

function Thumbnail({ imageURL = '', title = '', videoId = '', publishedDate = '' }) {
    publishedDate = publishedDate.split('T')[0];
    return (
        <Link to={`/player/${videoId}`} style={{ display: 'inline-block' }}>
            <StyledContainer>
                <StyledImage src={imageURL} alt="image" />
                <ThumbnailTitle>
                    <p>{`發布日期：${publishedDate}`}</p>
                    <h3>{title}</h3>
                </ThumbnailTitle>
            </StyledContainer>
        </Link>
    );
}

export default Thumbnail;
