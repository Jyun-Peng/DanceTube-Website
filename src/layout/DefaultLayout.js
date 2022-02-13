import styled from 'styled-components';
import NavBar from '../components/NavBar';
import DefaultContainer from './DefaultContainer';

const StyledWrapper = styled.div`
    background-color: var(--black);
    overflow-x: hidden;
    width: 100%;
    min-height: 110vh;
`;

const StyledChildrenContainer = styled(DefaultContainer)`
    padding-top: 3.35rem;
    padding-bottom: 4rem;
`;

function DefaultLayout({ children, dropdown }) {
    return (
        <StyledWrapper>
            <NavBar dropdown={dropdown} />
            <StyledChildrenContainer>{children}</StyledChildrenContainer>
        </StyledWrapper>
    );
}

export default DefaultLayout;
