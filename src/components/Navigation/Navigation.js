import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./Navigation.scss";
import logo from "../../img/logo.png";
import mail from "../../img/mail.png";
import whatsapp from "../../img/whatsapp.png";
import telegram from "../../img/telegram.png";
import instagram from "../../img/instagram.png";

function Navigation() {
	const [menuActive, setMenuActive] = useState(false);
	const body = document.body;
	const navigate = useNavigate()
	const items = [{value: "О компании", href: "/about", key: 1},
					{value: "Услуги", href: "/service", key: 2},
					{value: "Расчеты", href: "/calculation", key: 3},
					{value: "Вопрос-ответ", href: "/questions", key: 4},
					{value: "Галерея", href: "/gallery", key: 5},
					{value: "Контакты", href: "/contact", key: 6}]

	function refreshPage(){
		navigate("/");
		window.location.reload();
		window.scrollTo(0,0);
	}
	function scrollTop (){
		window.scrollTo(0,0);
	}

	return (
		<div className="wrapper">
			<div className="header">
				<div className="container">
					<div className="header-body">
						<Link to="/" className="header-logo"
							  onClick={refreshPage}>
							<img src={logo} alt="img"/>
						</Link>
						<div className={menuActive ? "header-burger active" : "header-burger"}
						     onClick={() => setMenuActive(!menuActive) & body.classList.toggle("lock")}>
							<span></span>
						</div>
						<nav className={menuActive ? "header-menu active" : "header-menu"}
						     onClick={() => setMenuActive(false) & body.removeAttribute("class")}>
							<ul className="header-list">
								{items.map(item =>
									<li key={item.key} onClick={() => scrollTop()}>
										<Link to={item.href} className="header-link">{item.value}</Link>
									</li>
								)}
							</ul>
							<div className="header-social">
								<a href="mailto:AIDADECKLOGISTICS@yandex.ru"><img src={mail} alt="img"/></a>
								<a href="https://wa.me/8613025100413" target="_blank" rel="noreferrer" ><img src={whatsapp} alt="img"/></a>
								<a href="https://t.me/AIDADECKLOGISTICS" target="_blank" rel="noreferrer" ><img src={telegram} alt="img"/></a>
								<a href="https://instagram.com/bolotov0804?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" ><img src={instagram} alt="img"/></a>
							</div>
						</nav>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navigation;