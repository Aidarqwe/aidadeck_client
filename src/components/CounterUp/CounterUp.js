import React from 'react';
import "./CounterUp.scss";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

function CounterUp() {
	const [ref, inView] = useInView({ triggerOnce: true });

	return (
		<div className="about-counter-up">
			<p>О КОМПАНИИ</p>
			<div className="info">
				<h3>На сегодняшний день «AIDADECK Logistics» крупная транспортно-логистическая компания, работающая на рынке уже больше 6 лет. </h3>
				<h5>Мы организуем перевозки товаров из Китая в Россию, Кыргызстан, Казахстан и Республику Беларусь. Наша задача – обеспечить быструю и надежную доставку вашего груза.</h5>
			</div>

			<div ref={ref}>
				{inView && (
					<div className="counter-wrapper">
						<div className="counter-body">
							<div className="counter-up">
								<CountUp start={0} end={5468} duration={3} delay={0}/>
							</div>
							<p>Доставленных посылок</p>
						</div>
						<div className="counter-body">
							<div className="counter-up">
								<CountUp start={0} end={4950} duration={3} delay={0}/>
							</div>
							<p>Постоянных клиентов</p>
						</div>
						<div className="counter-body">
							<div className="counter-up">
								<CountUp start={0} end={650} duration={3} delay={0}/>
							</div>
							<p>Перевозок в год</p>
						</div>
						<div className="counter-body">
							<div className="counter-up">
								<CountUp start={0} end={140} duration={3} delay={0}/>
							</div>
							<p>Городов стран СНГ</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default CounterUp;
