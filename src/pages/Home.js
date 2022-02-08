import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layout/DefaultLayout';
import Thumbnail from '../components/Thumbnail';
import Button from '../components/Button';
import { searchVideoList } from '../functional/GetData';
import FlexBox from '../layout/FlexBox';

const StyledFlexBox = styled(FlexBox)`
    margin: 0 -0.25rem;
    transform: translateX(0);
    @media (max-width: 768px) {
        width: calc(50%);
    }

    @media (max-width: 480px) {
        width: calc(100%);
    }
`;

const ThumbnailContainer = styled.div`
    order: ${(props) => props.order};
    flex-shrink: 0;
    width: calc(33.33333%);
    padding: 0 0.25rem;

    @media (max-width: 768px) {
        width: calc(50%);
    }

    @media (max-width: 480px) {
        width: calc(100%);
    }
`;

const Carousel = styled.div`
    overflow: hidden;
`;

const CarouselButton = styled.button`
    background-color: var(--white);
    position: absolute;
    top: 0;
    height: 100%;
    opacity: 0.2;

    &:hover {
        opacity: 1;
    }
    &.carousel__btn--prev {
        left: 0;
    }
    &.carousel__btn--next {
        right: 0;
    }
`;

function Section({ title }) {
    const [videoList, setVideoList] = useState([]);
    const [orderList, setOrderList] = useState([]);
    const carouselContent = useRef();
    const keyword = title.toLowerCase();

    //Fetch youtube video
    useEffect(() => searchVideoList(keyword, null, setVideoList), []);
    useEffect(() => {
        let newOrderList = videoList.map((v, index) => {
            return `${index + 1}`;
        });
        setOrderList(newOrderList);
        newOrderList = null;
        carouselContent.current.style.transform = `translateX(${-carouselContent.current.scrollWidth / 5}px)`;
    }, [videoList]);

    function handleCarouselButtonClick(next) {
        let newOrderList = [];
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
        <div className="pt-4">
            <div className="flex justify-between items-center py-2 mb-4">
                <h3 className="text-xl text-white font-bold">{title}</h3>
                <Button text="more" url={`/style/${keyword}/2021`} />
            </div>

            <Carousel>
                <StyledFlexBox ref={carouselContent}>
                    {videoList.map((video, index) => (
                        <ThumbnailContainer key={index} order={orderList.length > 0 ? orderList[index] : '0'}>
                            <Thumbnail
                                imageURL={video.snippet.thumbnails.high.url}
                                title={video.snippet.title}
                                videoId={video.id.videoId}
                                publishedDate={video.snippet.publishedAt}
                                keyword={keyword}
                            />
                        </ThumbnailContainer>
                    ))}
                </StyledFlexBox>
                <CarouselButton className="carousel__btn--prev" onClick={() => handleCarouselButtonClick(false)}>
                    prev
                </CarouselButton>
                <CarouselButton className="carousel__btn--next" onClick={() => handleCarouselButtonClick(true)}>
                    next
                </CarouselButton>
            </Carousel>
        </div>
    );
}

function Home() {
    return (
        <DefaultLayout>
            <Section title="Locking" />
            <Section title="Popping" />
            <Section title="Waacking" />
        </DefaultLayout>
    );
}

export default Home;
