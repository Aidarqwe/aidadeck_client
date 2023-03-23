import React from 'react';
import "./Footer.scss";
import MyMap from "../Map/Map";
import telegramWhite from "../../img/telegram-white.svg";
import whatsappWhite from "../../img/whatsapp-white.svg";
import instWhite from "../../img/instagram-white.svg";


function Footer() {
	return (
		<div className="footer">
				<div className="footer-body">
					<MyMap/>
					<div className="footer-info">
						<div className="footer-links">
							<a href="https://t.me/AIDADECKLOGISTICS" target="_blank" rel="noreferrer" className="link"><img src={telegramWhite} alt="img"/></a>
							<a href="https://wa.me/8613025100413" target="_blank" rel="noreferrer" className="link"><img src={whatsappWhite} alt="img"/></a>
							<a href="https://instagram.com/bolotov0804?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="link"><img src={instWhite} alt="img"/></a>
						</div>
						<p>Все права защищены. &copy; AIDADECK Logistics. 2022</p>
					</div>
				</div>
		</div>
	);
}

export default Footer;