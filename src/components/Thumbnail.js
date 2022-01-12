import react from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    width: 22rem;
    height: 15rem;
    flex: 1 0 auto;
    border-radius: 0.3rem;
    overflow: hidden;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
`;

function Thumbnail({ index, imageURL, title }) {
    console.log(imageURL);
    return (
        <StyledContainer key={index}>
            <img src={imageURL} alt="image" className="w-full" />
            <div className="bg-white text-base max-h-[3.5rem] absolute bottom-0 px-4 py-3 bg-gray text-white font-bold">
                {title}
            </div>
        </StyledContainer>
    );
}

export default Thumbnail;
