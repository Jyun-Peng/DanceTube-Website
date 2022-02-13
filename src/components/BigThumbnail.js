import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatter from '../functional/formatter';

const StyledImage = styled.img`
    width: 40%;
    aspect-ratio: 16/9;
    object-fit: cover;
    object-position: center;
    filter: saturate(80%);
    border-radius: 0.3rem;

    @media (max-width: 480px) {
        aspect-ratio: 10/9;
    }
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: flex-start;
    overflow: hidden;
`;

const ThumbnailTitle = styled.div`
    flex: 1 1 auto;
    padding: 0 1rem;

    & > h3 {
        overflow: hidden;
        margin: 0.4rem 0 0.8rem 0;
        max-height: 2.86rem;
    }
`;

function BigThumbnail({
    imageURL = '',
    title = '',
    channelTitle = '',
    videoId = '',
    publishedDate = '',
    keyword = '',
}) {
    return (
        <Link
            to={process.env.PUBLIC_URL + `/player/${keyword}/${videoId}`}
            style={{ display: 'inline-block', width: '100%' }}
        >
            <StyledContainer>
                <StyledImage src={imageURL} alt="image" />
                <ThumbnailTitle>
                    <p>{`${formatter.formatDate(publishedDate)}`}</p>
                    <h3>{title}</h3>
                    <p>{channelTitle}</p>
                </ThumbnailTitle>
            </StyledContainer>
        </Link>
    );
}

export default BigThumbnail;
