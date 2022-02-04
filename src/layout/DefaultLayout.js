import react from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const StyledWrapper = styled.div`
    background-color: var(--black);
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
`;

function DefaultLayout({ children, dropdown }) {
    return (
        <StyledWrapper>
            <NavBar dropdown={dropdown} />
            <div className="max-w-4xl mx-auto pt-[2.5rem] pb-[4.25rem]">{children}</div>
        </StyledWrapper>
    );
}

export default DefaultLayout;
