import React from 'react';
import "./About.scss";
import Section from "../../components/Section/Section";
import webQr from "../../img/aboutQrWeb.svg";
import mailQr from "../../img/aboutQrMail.svg";
import whatsappQr from "../../img/whatsapp-qr.svg";
import telegramQr from "../../img/telegram-qr.jpg";
import instagramQr from "../../img/instagram-qr.jpg";
import missionImg1 from "../../img/aboutMission1.svg";
import missionImg2 from "../../img/aboutMission2.svg";
import missionImg3 from "../../img/aboutMission3.svg";
import aboutImg from "../../img/aboutImg.png";

function About() {
	const goods = [
		{
			title: "Качественное обслуживание клиентов",
			img: missionImg1,
			text: "Оказываем услугу “под ключ”, полностью избавляя вас от всевозможных забот, рисков и необоснованных затрат"
		},
		{
			title: "Квалифицированные менеджеры",
			img: missionImg2,
			text: "Регулярно проводим семинары, тренинги в сфере продаж и обслуживания клиентов для наших менеджеров"
		},
		{
			title: "Доставляем грузы быстро и безопасно",
			img: missionImg3,
			text: "Наша команда знает правила и тонкости международных грузоперевозок, гарантируя клиентам полную сохранность перевозов"
		},
	]
	return (
		<div className="about">
			<Section>
				<div className="title">
					<h1>Помогаем найти поставщиков в Китае, проверить товар, оформить заказ и доставку</h1>
					<div className="subtitle">
						<p>Международной логистическая компания Китая «AIDADECK-Logistics». Мы перевезим грузы из Китая в Россию, Казахстан, Кыргызстан и Беларусь</p>
						<p>Мы спланируем наиболее подходящий для вас маршрут перевозки и предложим вам на выбор различные виды транспорта. Также берем на себя растаможку и таможенные вопросы</p>
					</div>
				</div>
			</Section>
			<div className="qr">
				<Section>
					<div className="qr-wrapper">
						<div className="info">
							<h2>Доставка товаров из Китая</h2>
							<div className="links">
								<a href="https://aidadeck-logistics.ru" target="_blank" rel="noreferrer">
									<img src={webQr}
										 alt="img"/>aidadeck-logistics.ru
								</a>
								<a href="mailto:aidadecklogistics@gmail.com">
									<img src={mailQr}
										 alt="img"/>aidadecklogistics@gmail.com
								</a>
							</div>
						</div>
						<div className="codes">
							<div className="wrapper">
								<img src={whatsappQr} alt="img"/>
								<p>+8613025100314</p>
							</div>
							<div className="wrapper">
								<img src={telegramQr} alt="img"/>
								<p>@aidadecklogistics</p>
							</div>
							<div className="wrapper">
								<img src={instagramQr} alt="img"/>
								<p>@bolotov0804</p>
							</div>
						</div>
					</div>
				</Section>
			</div>
			<div className="mission">
				<Section>
					<div className="group">
						<h2>Наша миссия</h2>
						<p>Постоянно развиваться и повышать качество нашей услуги за счёт внедрения инновационных технологий</p>
					</div>
					<div className="advantages">
						{
							goods.map((item, index) => (
								<div className="item" key={index}>
									<img src={item.img} alt="img"/>
									<h4>{item.title}</h4>
									<p>{item.text}</p>
								</div>
							))
						}
					</div>
				</Section>
			</div>
			<div className="about-image">
				<img src={aboutImg} alt="img"/>
			</div>
		</div>
	)
}

export default About;
