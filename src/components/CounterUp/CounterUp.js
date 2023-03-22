import React, {useState} from 'react';
import "./CounterUp.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterUp() {
	const [counterOn, setCounterOn] = useState(false);
	return (
		<ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
			<div className="counter-wrapper">
				<div className="counter-body">
					{counterOn && <CountUp start={0} end={5468} duration={3} delay={0}/>}
					<p>Доставленных посылок</p>
				</div>
				<div className="counter-body">
					{counterOn && <CountUp start={0} end={2156} duration={3} delay={0}/>}
					<p>Клиентов</p>
				</div>
				<div className="counter-body">
					{counterOn && <CountUp start={0} end={650} duration={3} delay={0}/>}
					<p>Перевозок в год</p>
				</div>
			</div>
		</ScrollTrigger>
	);
}

export default CounterUp;