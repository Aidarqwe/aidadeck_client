import React from 'react';
import "./Header.scss"
import Section from "../Section/Section";
import {useNavigate} from "react-router-dom";

function Header() {
	const navigate = useNavigate();
	const handleOnClick = () => {
		navigate("/contact");
		window.scrollTo(0,0);
	}
	return (
		<div className="header-background">
			<div className="header-content">
				<Section>
				<h2>БЫСТРО. УДОБНО. НАДËЖНО</h2>
				<h1>Доставка грузов из Китая от компании <span>AIDADECK Logistics</span></h1>
				<h4>Мы предлагаем вам профессиональное сопровождение  международных перевозок грузов любой сложности.</h4>
				<div className="header_info">
					<div className="_first">
						<span>0%</span>
						<p>за оплату поставщику</p>
					</div>
					<div className="_second">
						<p>Работаем от</p>
						<span>20кг</span>
					</div>
				</div>
				<button onClick={handleOnClick}>Получить консультацию</button>
				</Section>
			</div>
		</div>
	);
}

export default Header;