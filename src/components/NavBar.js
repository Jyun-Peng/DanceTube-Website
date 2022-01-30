import react from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { searchVideo } from '../functional/SearchVideo';
import DefaultContainer from '../layout/DefaultContainer';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: #333333;
    z-index: 10;
`;
function NavBar({ dropdown }) {
    return (
        <StyledHeader>
            <DefaultContainer>
                <Link to="/">
                    <h3 className="text-[1.5rem] text-white font-bold">DanceTube</h3>
                </Link>

                <div className="flex">{dropdown && <div className="text-white">style</div>}</div>
            </DefaultContainer>
        </StyledHeader>
    );
}

export default NavBar;
