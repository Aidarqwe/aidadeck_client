import React from 'react';
import "./Cards.scss";
import deliver from "../../img/service-deliver.jpg";
import buy from "../../img/service-buy.jpg";
import trip from "../../img/service-trip.jpg";
import production from "../../img/service-production.jpg";
import outsourcing from "../../img/service-outsourcing.png";
import money from "../../img/service-money.jpg";
import declaration from "../../img/service-declaration.jpg";
import stock from "../../img/service-stock.jpg";
import search from "../../img/service-search.jpg";

function Cards() {
	const services = [
		{
			id: 1,
			img: deliver,
			title: "Доставка из Китая",
			text: "Контейнерные перевозки сборных грузов, авто, авиа, морским и железнодорожным транспортом",
		},
		{
			id: 2,
			img: buy,
			title: "Выкуп товаров",
			text: "0% комиссия за выкуп с 1688 и других площадок и 0% комиссия за оплату поставщику по лучшему курсу",
		},
		{
			id: 3,
			img: money,
			title: "Трансфер денег ",
			text: "Мы переводим деньги в банк в Китае и далее напрямую поставщику товара в юанях, контролируя поступления денежных средств на каждом этапе проведения транзакций",
		},

		{
			id: 4,
			img: outsourcing,
			title: "Аутсорсинг вэд",
			text: "Думаете, как купить и доставить импортный товар? Поможем решить вашу задачу!",
		},
		{
			id: 5,
			img: trip,
			title: "Поездки в Китай",
			text: 'Для бизнесменов, дорожащих своим временем и финансовыми ресурсами, наша компания предлагает услуги переводчика в Китае',
		},
		{
			id: 6,
			img: stock,
			title: "Собственные склады",
			text: " Собственные складские помещения   в г. Гуанчжоу и г. Фошань",
		},
		{
			id: 7,
			img: declaration,
			title: "Таможенное декларирование",
			text: "Подготовка полного пакета документов и прохождения всех этапов таможенного контроля",
		},

		{
			id: 8,
			img: search,
			title: "Поиск производителей и поставщиков в Китае",
			text: "От детских игрушек до промышленных станков",
		},
		{
			id: 9,
			img: production,
			title: "Контрактные производства",
			text: "Поможем создать уникальный продукт под вашим брендом",
		},
	]
	return (
		<div className="card-wrapper">
			<h1>Наши услуги</h1>
			<div className="cards">
				{services.map(item =>
					<div className="card-body" key={item.id}>
						<div className="img-wrapper"><img src={item.img} alt="img"/></div>
						<h3>{item.title}</h3>
						<p>{item.text}</p>
					</div>
				)}
			</div>

		</div>
	);
}

export default Cards;