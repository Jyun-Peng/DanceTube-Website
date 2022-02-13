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
    border-radius: 0.3rem 0.3rem 0 0;
    overflow: hidden;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
    border-bottom: 0.1rem solid var(--purple);
`;

const ThumbnailTitle = styled.div`
    padding: 0.8rem;

    & > h3 {
        height: 2.86rem;
        overflow: hidden;
    }
`;

function Thumbnail({ imageURL, title, videoId, publishedDate, keyword }) {
    return (
        <Link to={process.env.PUBLIC_URL + `/player/${keyword}/${videoId}`} style={{ width: '100%' }}>
            <StyledContainer>
                <StyledImage src={imageURL} alt="image" />
                <ThumbnailTitle>
                    <p>{formatter.formatDate(publishedDate)}</p>
                    <h3>{title}</h3>
                </ThumbnailTitle>
            </StyledContainer>
        </Link>
    );
}

export default Thumbnail;
