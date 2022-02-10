import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    background-color: var(${(props) => (props.bgColor ? props.bgColor : '--purple')});

    line-height: 1;
    padding: 0.375rem 0.75rem;
    border-radius: 0.875rem;
`;
function Button({ text, url, handleClick, bgColor }) {
    return (
        <Link to={url ? url : '#'}>
            <StyledButton onClick={handleClick} bgColor={bgColor}>
                {text}
            </StyledButton>
        </Link>
    );
}

export default Button;
