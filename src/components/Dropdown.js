import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';
import FlexBox from '../layout/FlexBox';
import arrow from '../images/Logo/arrow-down.svg';

const ListContainer = styled.div`
    position: absolute;
    top: 2.25rem;
    right: 0;
    background-color: var(--white);
    border-radius: 0.25rem;
    overflow: hidden;

    & li > a {
        display: block;
        width: 100%;
        padding: 0.5rem 1.25rem 0.5rem 0.5rem;
        font-size: 1rem;
        font-weight: 600;

        &:hover {
            background-color: var(--gray-text);
        }
    }
`;

const ArrowSvg = styled.img`
    width: 1rem;
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

function Dropdown({ state, id, currentText, list, handleClick }) {
    // const [isOpen, setIsOpen] = useState(false);

    // const handleClick = function () {
    //     setIsOpen(!isOpen);
    // };

    return (
        <div>
            <Button
                text={
                    <FlexBox gap="0.5rem">
                        <span>{currentText}</span>
                        <ArrowSvg src={arrow} isOpen={state} />
                    </FlexBox>
                }
                handleClick={() => handleClick(id)}
                bgColor={'--gray-bg'}
            />
            {state && (
                <ListContainer onClick={() => handleClick(id)}>
                    <ul>
                        {list.map((ele) => (
                            <li>
                                <Link to={ele.url}>{ele.text}</Link>
                            </li>
                        ))}
                    </ul>
                </ListContainer>
            )}
        </div>
    );
}

export default Dropdown;
