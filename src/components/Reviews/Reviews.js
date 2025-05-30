import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Reviews.scss";
import leftImg from "../../img/reviewsLeftImg.svg";
import rightImg from "../../img/reviewsRightImg.svg";

const reviews = [
    { id: 1, media: "/media/review1.jpg", type: "image" },
    { id: 2, media: "/media/reviewVideo1.MP4", type: "video" },
    { id: 3, media: "/media/review3.jpg", type: "image" },
    { id: 4, media: "/media/review4.jpg", type: "image" },
    { id: 5, media: "/media/review5.jpg", type: "image" },
    { id: 6, media: "/media/reviewVideo2.MP4", type: "video" },
    { id: 7, media: "/media/review6.jpg", type: "image" },
    { id: 8, media: "/media/review7.jpg", type: "image" },
    { id: 9, media: "/media/review8.jpg", type: "image" },
    { id: 10, media: "/media/reviewVideo3.MP4", type: "video" },
    { id: 11, media: "/media/review9.jpg", type: "image" },
    { id: 12, media: "/media/review10.jpg", type: "image" },
    { id: 13, media: "/media/reviewVideo4.MP4", type: "video" },
    { id: 14, media: "/media/review2.jpg", type: "image" },
];

function Reviews() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.params) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <div className="reviews-container">
            <h2>Отзывы</h2>
            <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                allowTouchMove={false}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                loop={true}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
            >
                {reviews.map(({ id, media, type }) => (
                    <SwiperSlide key={id} className="review-card">
                        {type === "image" ? (
                            <img src={media} alt="review" loading="lazy" />
                        ) : (
                            <video src={media} controls preload="metadata" />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-buttons">
                <button ref={prevRef} className="custom-prev">
                    <img src={leftImg} alt="prev" />
                </button>
                <button ref={nextRef} className="custom-next">
                    <img src={rightImg} alt="next" />
                </button>
            </div>
        </div>
    );
}

export default Reviews;
