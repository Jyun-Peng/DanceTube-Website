import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLayout from '../layout/DefaultLayout';

const StyledErrorMessage = styled.h1`
    color: var(--error);
    font-size: 5rem;
    font-weight: 600;
    padding-top: 20vh;
`;
function NotFound() {
    let { message } = useParams();
    return (
        <DefaultLayout>
            <StyledErrorMessage>{message}</StyledErrorMessage>
        </DefaultLayout>
    );
}

export default NotFound;
