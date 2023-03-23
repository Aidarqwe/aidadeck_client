import React from 'react';
import "./Contact.scss";
import Section from "../../components/Section/Section";
import Form from "../../components/Form/Form";
import chinaIcon from "../../img/china-icon.svg";
import russiaIcon from "../../img/russia-icon.svg";
import mailBlack from "../../img/mail-black.svg";
import whatsappBlack from "../../img/whatsapp-black.svg";
import telegramBlack from "../../img/telegram-black.svg";
import instBlack from "../../img/instagram-black.svg";
import wechatBlack from "../../img/wechat-black.svg";



function Contact() {
	return (
		<Section>
			<div className="contact-wrapper">
				<div className="contact-items">
					<h1>Контакты</h1>
					<div className="contact-links">
						<a href="tel:+8613025100413"><img src={chinaIcon} alt="img"/>+86 (130)-2510-0413</a>
						<a href="tel:+79625489055"><img src={russiaIcon} alt="img"/>+7 (962)-548-90-55</a>
						<a href="mailto: aidadecklogistics@gmail.com"><img src={mailBlack} alt="img"/>aidadecklogistics@gmail.com</a>
						<a href="https://t.me/AIDADECKLOGISTICS" target="_blank" rel="noreferrer"><img src={telegramBlack} alt="img"/>AIDADECKLOGISTICS</a>
						<a href="https://instagram.com/bolotov0804?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer"><img src={instBlack} alt="img"/>bolotov0804</a>
						<a href="https://wa.me/8613025100413" target="_blank" rel="noreferrer"><img src={whatsappBlack} alt="img"/>AIDADECKLOGISTICS</a>
						<p><img src={wechatBlack} alt="img"/>Bolotoveken</p>
					</div>
				</div>
				<Form/>
			</div>
		</Section>
	);
}

export default Contact;