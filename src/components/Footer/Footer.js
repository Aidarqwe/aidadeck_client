import React from 'react';
import "./Footer.scss";
import telegramWhite from "../../img/telegram-white.svg";
import whatsappWhite from "../../img/whatsapp-white.svg";
import instWhite from "../../img/instagram-white.svg";


function Footer() {
	return (
		<div className="footer">
			<div className="footer-body">
				<div className="footer-info">
					<p>Все права защищены. &copy; AIDADECK Logistics. {new Date().getFullYear()}</p>
					<div className="footer-links">
						<a href="https://t.me/BOLOTOVYRYSKELDI" target="_blank" rel="noreferrer"
						   className="link"><img src={telegramWhite} alt="img"/></a>
						<a href="https://wa.me/8613025100413" target="_blank" rel="noreferrer" className="link"><img
							src={whatsappWhite} alt="img"/></a>
						<a href="https://instagram.com/bolotov0804?igshid=YmMyMTA2M2Y=" target="_blank"
						   rel="noreferrer" className="link"><img src={instWhite} alt="img"/></a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;