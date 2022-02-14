import { useEffect, useRef, useState } from 'react';
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
        padding: 0.5rem 1.25rem 0.5rem 1rem;
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

function DropdownList({ list, isOpen, onClickOutside, onDirectTo }) {
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        }
        document.addEventListener('mouseup', handleClickOutside);
        return () => {
            document.removeEventListener('mouseup', handleClickOutside);
        };
    }, [ref]);

    if (!isOpen) return null;

    return (
        <ListContainer ref={ref} onClick={() => onDirectTo()}>
            <ul>
                {list.map((ele) => (
                    <li>
                        <Link to={ele.url}>{ele.text}</Link>
                    </li>
                ))}
            </ul>
        </ListContainer>
    );
}

function Dropdown({ currentText, list }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <Button
                text={
                    <FlexBox gap="0.5rem">
                        <span>{currentText}</span>
                        <ArrowSvg src={arrow} isOpen={isOpen} />
                    </FlexBox>
                }
                handleClick={() => setIsOpen(true)}
                color={'gray'}
            />
            <DropdownList
                list={list}
                isOpen={isOpen}
                onClickOutside={() => setIsOpen(false)}
                onDirectTo={() => setIsOpen(false)}
            />
        </div>
    );
}

export default Dropdown;
