import React, {useState} from 'react';
import "./Pulse.scss";
import phoneAccept from "../../img/phone-accept.svg";
import phoneDecline from "../../img/phone-decline.svg";
import mail from "../../img/mail.svg";
import whatsapp from "../../img/whatsapp.svg";
import telegram from "../../img/telegram.svg";

function Pulse() {
	const [isClick, setIsClick] = useState(false);
	return (
		<div className="pulse-container">
				{
					isClick ?
						(<div className="pulse"
						      onClick={() => setIsClick(!isClick)}>
							<div className="pulse-social">
								<a href="mailto:AIDADECKLOGISTICS@yandex.ru"><img src={mail} alt="img"/></a>
								<a href="https://wa.me/8613025100413" target="_blank" rel="noreferrer"><img src={whatsapp} alt="img"/></a>
								<a href="https://t.me/AIDADECKLOGISTICS" target="_blank" rel="noreferrer"><img src={telegram} alt="img"/></a>
							</div>
							<img src={phoneDecline} alt="img"/>
						</div>)
						 :
						(<div className="pulse"
						      onClick={() => setIsClick(!isClick)}>
								<img src={phoneAccept} alt="img"/>
						</div>)

				}
		</div>
	);
}

export default Pulse;