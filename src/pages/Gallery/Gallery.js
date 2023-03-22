import React from 'react';
import "./Gallery.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper";
import Section from "../../components/Section/Section";
import 'swiper/css';
import 'swiper/css/pagination';
import swiperImg1 from "../../img/swiper-img1.jpg";
import swiperImg2 from "../../img/swiper-img2.jpg";
import swiperImg3 from "../../img/swiper-img3.jpg";
import swiperImg4 from "../../img/swiper-img4.jpg";
import swiperImg5 from "../../img/swiper-img5.jpg";
import swiperImg6 from "../../img/swiper-img6.jpg";
import swiperImg7 from "../../img/swiper-img7.jpg";
import swiperImg8 from "../../img/swiper-img8.jpg";

function Gallery() {
	return (
		<Section>
			<div className="gallery-wrapper">
				<h1>Галерея</h1>
				<Swiper
					loop={true}
					slidesPerView={"auto"}
					grabCursor={true}
					centeredSlides={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					pagination={{el: ".swiper-pagination", clickable: true}}
					modules={[Autoplay, Pagination]}
				>
					<SwiperSlide>
						<img src={swiperImg1} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg2} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg3} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg4} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg5} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg6} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg7} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg8} alt="img"/>
					</SwiperSlide>
					<div className="swiper-pagination"></div>
				</Swiper>
			</div>
		</Section>

	);
}

export default Gallery;