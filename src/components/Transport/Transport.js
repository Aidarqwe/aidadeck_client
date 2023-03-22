import React from 'react';
import "./Transport.scss";
import plane from "../../img/plain.png";
import car from "../../img/car.png";
import boat from "../../img/boat.png";
import train from "../../img/train.png";

function Transport() {
	const items = [
		{
			id: 1,
			img: train,
			title: "Ж/Д доставка",
			text: " 18 - 23 дней",
			price: "от 1$ за кг",
		},
		{
			id: 2,
			img: plane,
			title: "Авиа доставка",
			text: "3 - 5 дней",
			price: "от 7$ за кг",
		},
		{
			id: 3,
			img: boat,
			title: "Морская доставка",
			text: "25 - 30 дней",
			price: " от 0,7$ за кг"
		},
		{
			id: 4,
			img: car,
			title: "Авто доставка",
			text: "10 - 12 дней",
			price: "от 2$ за кг",
		},

	]
	return (
		<div className="transport">
			<h1>Виды доставки</h1>
			<div className="transport-wrapper">
				{
					items.map(item =>
						<div className="transport-body" key={item.id}>
							<div className="transport-img"><img src={item.img} alt="img"/></div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							<h5>{item.price}</h5>
						</div>
					)
				}
			</div>
		</div>

	);
}

export default Transport;