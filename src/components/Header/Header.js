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
		<div>
			<div className="header-background">
				<Section>
					<div className="header-content">
						<h2>БЫСТРО. УДОБНО. НАДËЖНО</h2>
						<h1>Доставка грузов из Китая от компании <span>AIDA</span><span>DECK</span> <span>Logistics</span></h1>
						<h4>Мы предлагаем вам профессиональное сопровождение  международных перевозок грузов любой сложности.
							<br></br>0% за оплату поставщику. Работаем от 20кг.</h4>
						<button onClick={handleOnClick}>Свяжитесь с нами</button>
					</div>
				</Section>
			</div>
		</div>
	);
}

export default Header;