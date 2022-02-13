import react, { useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import DefaultContainer from '../layout/DefaultContainer';
import FlexBox from '../layout/FlexBox';
import Dropdown from './Dropdown';

const StyledHeader = styled.header`
    /* box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2); */
    padding: 0.8rem 0;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--black);
    z-index: 10;
`;

const StyledLogo = styled.h3`
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1;
`;

function DropdownGroup() {
    let { style, year } = useParams();

    const styleList = [
        { text: 'Locking', url: process.env.PUBLIC_URL + `/style/locking/${year}` },
        { text: 'popping', url: process.env.PUBLIC_URL + `/style/popping/${year}` },
        { text: 'waacking', url: process.env.PUBLIC_URL + `/style/waacking/${year}` },
    ];
    const yearList = [
        { text: '2022', url: process.env.PUBLIC_URL + `/style/${style}/2022` },
        { text: '2021', url: process.env.PUBLIC_URL + `/style/${style}/2021` },
        { text: '2020', url: process.env.PUBLIC_URL + `/style/${style}/2020` },
        { text: '2019', url: process.env.PUBLIC_URL + `/style/${style}/2019` },
    ];

    return (
        <FlexBox gap={'0.5rem'}>
            <Dropdown currentText={style[0].toUpperCase() + style.slice(1)} list={styleList} />
            <Dropdown currentText={year} list={yearList} />
        </FlexBox>
    );
}

function NavBar({ dropdown }) {
    let { style, year } = useParams();

    return (
        <StyledHeader>
            <DefaultContainer>
                <FlexBox spaceBetween>
                    <Link to={process.env.PUBLIC_URL + '/'}>
                        <StyledLogo>DanceTube</StyledLogo>
                    </Link>

                    {dropdown && <DropdownGroup />}
                </FlexBox>
            </DefaultContainer>
        </StyledHeader>
    );
}

export default NavBar;
