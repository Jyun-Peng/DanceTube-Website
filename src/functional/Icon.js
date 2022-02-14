import styled from 'styled-components';

const Icon = styled.img`
    height: ${(props) => (props.size ? props.size : '1rem')};
`;

export default Icon;
