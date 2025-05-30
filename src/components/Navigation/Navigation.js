import React, {useContext, useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import "./Navigation.scss";
import logo from "../../img/logo.png";
import adminImg from "../../img/admin-img.svg";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

function Navigation() {
	const {store} = useContext(Context);
	const [menuActive, setMenuActive] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [backgroundTransparent, setBackgroundTransparent] = useState(true);
	const body = document.body;
	const navigate = useNavigate();
	const location = useLocation();

	const items = [{value: "О компании", href: "/about", key: 1},
					{value: "Услуги", href: "/service", key: 2},
					{value: "Расчеты", href: "/calculation", key: 3},
					{value: "Вопрос-ответ", href: "/questions", key: 4},
					{value: "Галерея", href: "/gallery", key: 5},
					{value: "Контакты", href: "/contact", key: 6},
					{value: "Для бизнеса", href: "/legal", key: 7},
	]

	useEffect(() => {
		if (window.innerWidth > 767) {
			setMenuActive(false);
		}

		const handleScroll = () => {
			if (window.scrollY > window.innerHeight - 600) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if (location.pathname === '/' || location.pathname === '/legal') {
			setBackgroundTransparent(false);
		} else {
			setBackgroundTransparent(true);
		}
	}, [location.pathname]);

	function refreshPage(){
		navigate("/");
		window.location.reload();
		window.scrollTo(0,0);
	}
	function scrollTop (){
		window.scrollTo(0,0);
	}

	function linkTrackCargo(){
		navigate("/track");
		scrollTop();
	}

	function linkToAdmin(){
		navigate("/admin");
		scrollTop();
	}

	return (
		<div className={`header ${scrolled || backgroundTransparent ? "scrolled" : ""}`}>
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
						<div className="nav_usr menu">
							<button className="nav_btn" onClick={() => linkTrackCargo()}>Отслеживать товар</button>
							{
								store.isAuth &&
								<button onClick={() => linkToAdmin()} className="admin_btn"><img src={adminImg}
																								 alt="img"/></button>
							}
						</div>
					</nav>
					<div className="nav_usr">
						<button className="nav_btn" onClick={() => linkTrackCargo()}>Отслеживать товар</button>
						{
							store.isAuth &&
							<button onClick={() => linkToAdmin()} className="admin_btn"><img src={adminImg} alt="img"/>
							</button>
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default observer(Navigation);