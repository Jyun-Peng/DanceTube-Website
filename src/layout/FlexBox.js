import styled from 'styled-components';

const FlexBox = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: ${(props) => (props.spaceBetween ? 'space-between' : 'flex-start')};
`;

export default FlexBox;
