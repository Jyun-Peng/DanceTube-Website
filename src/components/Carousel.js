import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import FlexBox from '../layout/FlexBox';
import './Carousel.css';
import arrowLeft from '../icons/arrow-left.svg';
import arrowRight from '../icons/arrow-right.svg';

const StyledFlexBox = styled(FlexBox)`
    margin: 0 -0.25rem;
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

const OverflowContentContainer = styled.div`
    overflow: hidden;
`;

const CarouselButton = styled.button`
    background-color: var(--gray-bg);
    color: var(--purple);

    width: 2rem;
    text-align: center;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.4;
    overflow: hidden;

    border-radius: 0.4rem;

    & > img {
        margin: 0 auto;
        height: 1.5rem;
    }

    &:active {
        opacity: 1;
    }
    &.carousel__btn--prev {
        left: -2rem;
    }
    &.carousel__btn--next {
        right: -2rem;
    }

    @media (hover: hover) {
        &:hover {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        & {
            width: 1.5rem;
        }
        &.carousel__btn--prev {
            left: -1.5rem;
        }
        &.carousel__btn--next {
            right: -1.5rem;
        }
    }
`;

function Carousel({ itemList }) {
    const [orderList, setOrderList] = useState([]);
    const carouselContent = useRef();
    const disableFlag = useRef(true);

    useEffect(() => {
        setOrderList(itemList.map((v, index) => `${index + 1}`));
    }, [itemList]);

    function handleCarouselButtonClick(next) {
        if (!disableFlag.current) return;

        let newOrderList = [];
        if (next) {
            newOrderList.push(orderList[orderList.length - 1]);
            for (let i = 0; i < orderList.length - 1; i++) newOrderList.push(orderList[i]);
            carouselContent.current.classList.add('slide-next');
            disableFlag.current = false;

            setTimeout(() => {
                carouselContent.current.classList.remove('slide-next');
                setOrderList(newOrderList);
                newOrderList = null;
                disableFlag.current = true;
            }, 300);
        } else {
            for (let i = 1; i < orderList.length; i++) newOrderList.push(orderList[i]);
            newOrderList.push(orderList[0]);
            carouselContent.current.classList.add('slide-prev');
            disableFlag.current = false;

            setTimeout(() => {
                carouselContent.current.classList.remove('slide-prev');
                setOrderList(newOrderList);
                newOrderList = null;
                disableFlag.current = true;
            }, 300);
        }
    }

    return (
        <div>
            <OverflowContentContainer>
                <StyledFlexBox ref={carouselContent} className="carousel__item-group">
                    {itemList.map((item, index) => (
                        <ItemContainer key={index} order={orderList.length > 0 ? orderList[index] : '0'}>
                            {item}
                        </ItemContainer>
                    ))}
                </StyledFlexBox>
            </OverflowContentContainer>

            <CarouselButton className="carousel__btn--prev" onClick={() => handleCarouselButtonClick(false)}>
                <img src={arrowLeft} alt="icon-prev" />
            </CarouselButton>
            <CarouselButton className="carousel__btn--next" onClick={() => handleCarouselButtonClick(true)}>
                <img src={arrowRight} alt="icon-next" />
            </CarouselButton>
        </div>
    );
}

export default Carousel;
