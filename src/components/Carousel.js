import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import FlexBox from '../layout/FlexBox';

const StyledFlexBox = styled(FlexBox)`
    margin: 0 -0.25rem;
    transform: translateX(0);
`;

const ItemContainer = styled.div`
    order: ${(props) => props.order};
    flex-shrink: 0;
    width: 33.33333%;
    padding: 0 0.25rem;

    @media (max-width: 768px) {
        width: 50%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

const CarouselWrapper = styled.div`
    overflow: hidden;
`;

const CarouselButton = styled.button`
    background-color: var(--white);
    position: absolute;
    top: 0;
    height: 100%;
    opacity: 0.2;

    @media (hover: hover) {
        &:hover {
            opacity: 1;
        }
    }

    &:active {
        opacity: 1;
    }
    &.carousel__btn--prev {
        left: 0;
    }
    &.carousel__btn--next {
        right: 0;
    }
`;

function Carousel({ itemList }) {
    const [orderList, setOrderList] = useState([]);
    const carouselContent = useRef();

    useEffect(() => {
        setOrderList(itemList.map((v, index) => `${index + 1}`));
        carouselContent.current.style.transform = `translateX(${-carouselContent.current.scrollWidth / 5}px)`;
    }, [itemList]);

    function handleCarouselButtonClick(next) {
        let newOrderList = [];
        console.log('orderList :');
        console.log(orderList);
        if (next) {
            newOrderList.push(orderList[orderList.length - 1]);
            for (let i = 0; i < orderList.length - 1; i++) newOrderList.push(orderList[i]);
            carouselContent.current.style.transition = 'transform 0.3s';
            carouselContent.current.style.transform = `translateX(${(-2 * carouselContent.current.scrollWidth) / 5}px)`;

            setTimeout(() => {
                carouselContent.current.style.transition = 'none';
                carouselContent.current.style.transform = `translateX(${-carouselContent.current.scrollWidth / 5}px)`;
                setOrderList(newOrderList);
                newOrderList = null;
            }, 300);
        } else {
            for (let i = 1; i < orderList.length; i++) newOrderList.push(orderList[i]);
            newOrderList.push(orderList[0]);
            carouselContent.current.style.transition = 'transform 0.3s';
            carouselContent.current.style.transform = `translateX(0px)`;

            setTimeout(() => {
                carouselContent.current.style.transition = 'none';
                carouselContent.current.style.transform = `translateX(${-carouselContent.current.scrollWidth / 5}px)`;
                setOrderList(newOrderList);
                newOrderList = null;
            }, 300);
        }
    }

    return (
        <CarouselWrapper>
            <StyledFlexBox ref={carouselContent}>
                {itemList.map((item, index) => (
                    <ItemContainer key={index} order={orderList.length > 0 ? orderList[index] : '0'}>
                        {item}
                    </ItemContainer>
                ))}
            </StyledFlexBox>
            <CarouselButton className="carousel__btn--prev" onClick={() => handleCarouselButtonClick(false)}>
                prev
            </CarouselButton>
            <CarouselButton className="carousel__btn--next" onClick={() => handleCarouselButtonClick(true)}>
                next
            </CarouselButton>
        </CarouselWrapper>
    );
}

export default Carousel;
