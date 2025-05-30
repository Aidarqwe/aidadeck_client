import React from 'react';
import {useNavigate} from "react-router-dom";
import "./Goods.scss";
import facilities from "../../img/eqiupment.jpg";
import furniture from "../../img/furniture.png";
import toy from "../../img/toy.jpg";
import clothes from "../../img/clothes.jpg";
import electronic from "../../img/electronic.jpg";
import cosmetics from "../../img/cosmetics.jpg";

function Goods() {
	const items = [
		{
			id: 1,
			img: furniture,
			title: "Мебель",
			text: "Диваны и кресла, столы и стулья, кровати и шкафы",
		},
		{
			id: 2,
			img: facilities,
			title: "Оборудование",
			text: "Промышленное, холодильное, торговое, пищевое",
		},
		{
			id: 3,
			img: clothes,
			title: "Одежда",
			text: "Платья, куртки, брюки, нижнее белье, детская одежда, обувь",
		},
		{
			id: 4,
			img: electronic,
			title: "Электроника",
			text: "Компьютеры, телефоны, телевизоры, планшеты, наушники, часы",
		},
		{
			id: 5,
			img: cosmetics,
			title: "Косметика",
			text: "Декоротивная и уходовая, любых люксовых брендов со всех точек мира",
		},
		{
			id: 6,
			img: toy,
			title: "Игрушки",
			text: "Плюшевые, конструкторы, роботы, куклы, для младенцев и тд",
		},
	]
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/contact");
		window.scrollTo(0,0);
	}
	return (
		<div className="goods">
			<h2>ДОСТАВИМ ВСЁ, ЧТО ВАМ НЕОБХОДИМО</h2>
			<h4>От промышленных станков до детских игрушек</h4>
			<div className="goods-body">
				{
					items.map(item =>
						<div className="good" key={item.id}>
							<img src={item.img} alt="img"/>
							<h2>{item.title}</h2>
							<p>{item.text}</p>
							<button onClick={handleOnClick}>Связаться</button>
						</div>
					)
				}
			</div>
		</div>
	);
}

export default Goods;