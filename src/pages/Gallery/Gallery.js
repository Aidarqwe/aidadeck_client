import React from 'react';
import "./Gallery.scss";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Autoplay} from "swiper";
import Section from "../../components/Section/Section";
import 'swiper/css';
import 'swiper/css/pagination';
import swiperImg1 from "../../img/swiper-image1.jpg";
import swiperImg2 from "../../img/swiper-image2.jpg";
import swiperImg3 from "../../img/swiper-image3.jpg";
import swiperImg4 from "../../img/swiper-image4.jpg";
import swiperImg5 from "../../img/swiper-image5.jpg";
import swiperImg6 from "../../img/swiper-image6.jpg";
import swiperImg7 from "../../img/swiper-image7.jpg";
import swiperImg8 from "../../img/swiper-image8.jpg";
import swiperImg9 from "../../img/swiper-image9.jpg";
import swiperImg10 from "../../img/swiper-image10.jpg";
import swiperImg11 from "../../img/swiper-image11.jpg";
import swiperImg12 from "../../img/swiper-image12.jpg";
import swiperImg13 from "../../img/swiper-image13.jpg";
import swiperImg14 from "../../img/swiper-image14.jpg";
import swiperImg15 from "../../img/swiper-image15.jpg";
import swiperImg16 from "../../img/swiper-image16.jpg";
import swiperImg17 from "../../img/swiper-image17.jpg";




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
					<SwiperSlide>
						<img src={swiperImg9} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg10} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg11} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg12} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg13} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg14} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg15} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg16} alt="img"/>
					</SwiperSlide>
					<SwiperSlide>
						<img src={swiperImg17} alt="img"/>
					</SwiperSlide>
					<div className="swiper-pagination"></div>
				</Swiper>
			</div>
		</Section>

	);
}

export default Gallery;