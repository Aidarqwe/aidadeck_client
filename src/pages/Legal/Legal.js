import React from 'react';
import "./Legal.scss";
import {useNavigate} from "react-router-dom";
import Section from "../../components/Section/Section";
import goodsImg1 from "../../img/legalGoodsImg.jpg";
import goodsImg2 from "../../img/legalGoodsImg2.jpg";
import goodsImg3 from "../../img/legalGoodsImg3.jpg";
import stepImg1 from "../../img/legalStepsImg1.svg";
import stepImg2 from "../../img/legalStepsImg2.svg";
import stepImg3 from "../../img/legalStepsImg3.svg";
import stepImg4 from "../../img/legalStepsImg4.svg";
import stepImg5 from "../../img/legalStepsImg5.svg";
import stepImg6 from "../../img/legalStepsImg6.svg";
import stepImg7 from "../../img/legalStepsImg7.svg";
import stepImg8 from "../../img/legalStepsImg8.svg";

function Legal() {
	const navigate = useNavigate();

	const goods = [
		{
			text: "Купить товар в Китае с документами: торг-12, номер ДТ, сертификат, договор купли-продажи",
			image: goodsImg1,
		},
		{
			text: "Оплатить товар китайскому поставщику рублями официально и не бояться проблем с налоговой",
			image: goodsImg2,
		},
		{
			text: "Видеть, где находится груз. И знать когда он приедет в Россию",
			image: goodsImg3,
		},
	];
	const steps = [
		{
			step: "01",
			image: stepImg1,
			title: "Ищем поставщика",
			text: "На сайтах 1688, Alibaba и Taobao и пр.",
		},
		{
			step: "02",
			image: stepImg2,
			title: "Ведем переговоры",
			text: "О закупке, скидке или кастомизации товара",
		},
		{
			step: "03",
			image: stepImg3,
			title: "Делаем подробное КП",
			text: "Себестоимость товара, стоимость логистики, документов и деклараций",
		},
		{
			step: "04",
			image: stepImg4,
			title: "Заключаете договор",
			text: "Вы заключаете договор и оплачиваете услугу рублями официально нашей компании",
		},
		{
			step: "05",
			image: stepImg5,
			title: "Покупаем товар",
			text: "Переводим юани поставщику и следим, чтобы он выполнил свои обязательства",
		},
		{
			step: "06",
			image: stepImg6,
			title: "Получаем товар в Китае",
			text: "На своем складе в Гуанчжоу проверяем товар на брак и соответствие заказу",
		},
		{
			step: "07",
			image: stepImg7,
			title: "Отправляем в Москву",
			text: "Отправляем через границу, пройдя таможню",
		},
		{
			step: "08",
			image: stepImg8,
			title: "Доставка по России",
			text: "Товар отправляется по все городам России (по желанию)",
		},
	];

	const handleOnClick = () => {
		navigate("/contact");
		window.scrollTo(0,0);
	}
	return (
		<div className="legal">
			<div className="legal-header">
				<Section>
					<div className="legal-content">
						<div className="title">
							<h1>Белая</h1>
							<h1>доставка из Китая</h1>
						</div>
						<h4>Белая доставка груза по морю с официальной оплатой и документами, которые нужны налоговой и
							маркетплейсам.</h4>
						<button onClick={handleOnClick}>Получить консультацию</button>
					</div>
				</Section>
			</div>
			<Section>
				<div className="legal-body">
					<h2>Услуга для предпринимателей,<br/> которым нужно</h2>
					<div className="legal-body-goods">
						{goods.map((item, i) => (
							<div className="goods-item" key={i}>
								<img src={item.image} alt="img"/>
								<p>{item.text}</p>
							</div>
						))}
					</div>
				</div>
				<div className="legal-steps">
					<h2>Как мы доставляем товары из Китая</h2>
					<div className="legal-body-steps">
						{steps.map((item, i) => (
							<div className="steps-item" key={i}>
								<div className="step-id">
									<img src={item.image} alt="img"/>
									<h4>{item.step}</h4>
								</div>
								<div className="info">
									<h5>{item.title}</h5>
									<p>{item.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Section>
		</div>

	);
}

export default Legal;