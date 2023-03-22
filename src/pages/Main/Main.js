import React from 'react';
import "./Main.scss";
import Header from "../../components/Header/Header";
import CounterUp from "../../components/CounterUp/CounterUp";
import Cards from "../../components/Cards/Cards";
import Goods from "../../components/Goods/Goods";


function Main() {
	return (
		<div className="main">
			<Header/>
			<div className="section">
				<div className="main-title">
					<h4>На сегодняшний день  компания «AIDADECK Logistics» крупная транспортно-логистическая компания, работающая на рынке уже больше 6 лет. Наша команда организует перевозки любых товаров из Китая в Россию, Кыргызстан , Казахстан и Республику Беларусь. Мы работаем более чем с 100 городами стран СНГ. Наша главная задача - доставить груз быстро и надёжно.</h4>
				</div>
				<CounterUp/>
				<h1>Наши услуги</h1>
				<Cards/>
				<Goods/>
			</div>
		</div>
	);
}

export default Main;