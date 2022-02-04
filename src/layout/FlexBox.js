import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    gap: ${(props) => (props.gap ? props.gap : '0')};
    justify-content: ${(props) => (props.spaceBetween ? 'space-between' : 'flex-start')};
    align-items: center;
`;

export default FlexBox;
