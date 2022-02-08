import react, { useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import DefaultContainer from '../layout/DefaultContainer';
import FlexBox from '../layout/FlexBox';
import Button from './Button';
import arrow from '../images/Logo/arrow-down.svg';

const StyledHeader = styled.header`
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #333333;
    z-index: 10;
`;

const StyledLogo = styled.h3`
    font-size: 1.75rem;
    color: var(--white);
    font-weight: 600;
`;

function Dropdown({ currentText, list }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = function () {
        setIsOpen(!isOpen);
    };

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

    return (
        <div>
            <Button
                text={
                    <FlexBox gap="0.5rem">
                        <span>{currentText}</span>
                        <ArrowSvg src={arrow} isOpen={isOpen} />
                    </FlexBox>
                }
                handleClick={handleClick}
                bgColor={'--gray-bg'}
            />
            {isOpen && (
                <ListContainer onClick={() => setIsOpen(!isOpen)}>
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
function NavBar({ dropdown }) {
    let { style, year } = useParams();
    const styleList = [
        { text: 'Locking', url: `/style/locking/${year}` },
        { text: 'popping', url: `/style/popping/${year}` },
        { text: 'waacking', url: `/style/waacking/${year}` },
    ];

    return (
        <StyledHeader>
            <DefaultContainer>
                <FlexBox spaceBetween>
                    <Link to="/">
                        <StyledLogo>DanceTube</StyledLogo>
                    </Link>

                    <div className="flex">
                        {dropdown && (
                            <Dropdown currentText={style[0].toUpperCase() + style.slice(1)} list={styleList} />
                        )}
                    </div>
                </FlexBox>
            </DefaultContainer>
        </StyledHeader>
    );
}

export default NavBar;
