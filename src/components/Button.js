import react from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 1rem;
    font-weight: 600;
    color: var(--white);
    background-color: var(
        ${(props) => {
            if (props.bgColor === 'purple') return '--purple';
            if (props.bgColor === 'gray') return '--gray';
        }}
    );

    line-height: 1;
    padding: 0.375rem 0.75rem;
    border-radius: 0.875rem;
    transition: background-color 0.1s;

    @media (hover: hover) {
        &:hover {
            transition: none;
            background-color: var(
                ${(props) => {
                    if (props.bgColor === 'purple') return '--purple-hover';
                    if (props.bgColor === 'gray') return '--gray-hover';
                }}
            );
        }
        &:active {
            transition: none;
            background-color: var(
                ${(props) => {
                    if (props.bgColor === 'purple') return '--purple-active';
                    if (props.bgColor === 'gray') return '--gray-active';
                }}
            );
        }
    }
    @media (hover: none) {
        &:active {
            transition: none;
            background-color: var(
                ${(props) => {
                    if (props.bgColor === 'purple') return '--purple-hover';
                    if (props.bgColor === 'gray') return '--gray-hover';
                }}
            );
        }
    }
`;
function Button({ text, url, handleClick, color }) {
    return (
        <Link to={url ? url : '#'}>
            <StyledButton onClick={handleClick} bgColor={color}>
                {text}
            </StyledButton>
        </Link>
    );
}

export default Button;
