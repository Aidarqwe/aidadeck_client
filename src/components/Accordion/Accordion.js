import React from 'react';
import "./Accordion.scss";

function Accordion() {
	return (
		<div className="accordion-wrapper">
			<h1>Какой у вас вопрос?</h1>
			<div className="accordion">
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-1"/>
					<label className="accordion-title" htmlFor="item-1">Как сделать заказ?</label>
					<div className="accordion-text">
						<p>Просто напишите нашим менеджерам или отправьте заявку на наш почтовый ящик aidadecklogistics@gmail.ru. Принимаем заказы круглосуточно 24/7, включая выходные и праздники.</p>
					</div>
				</div>
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-2"/>
					<label className="accordion-title" htmlFor="item-2">Когда осуществляется оплата за услуги логистики?</label>
					<div className="accordion-text">
						<p>Вся доставка оплачивается при получении вами груза в Москве.</p>
					</div>
				</div>
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-3"/>
					<label className="accordion-title" htmlFor="item-3">Какие виды и сроки доставки?</label>
					<div className="accordion-text">
						<ul>
							<li>
								Ж/Д доставка
								<ul>
									<li>18 - 23 дней</li>
									<li>от 1$</li>
								</ul>
							</li>
							<li>
								Авиа доставка
								<ul>
									<li>3 - 5 дней</li>
									<li>от 7$</li>
								</ul>
							</li>
							<li>
								Авто доставка
								<ul>
									<li>10 - 12 дней</li>
									<li>от 2$</li>
								</ul>
							</li>
							<li>
								Морская доставка
								<ul>
									<li>25 - 30 дней</li>
									<li>от 0,7$</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-4"/>
					<label className="accordion-title" htmlFor="item-4">Дополнительная упаковка обязательна?</label>
					<div className="accordion-text">
						<p>Дополнительная упаковка необходима для сохранности и защиты самой продукции и окружающей её среды от повреждений и потерь, упрощающих транспортировку и хранение продукции.</p>
					</div>
				</div>
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-5"/>
					<label className="accordion-title" htmlFor="item-5">А что насчет страховки?</label>
					<div className="accordion-text">
						<ul>
							Цена страхования груза складывается от заявленной стоимости и составляет:
							<li>сборный груз — 2%</li>
							<li>морские, контейнерные перевозки — 1%</li>
							<li>опасные груза — индивидуально</li>
						</ul>
					</div>
				</div>
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-6"/>
					<label className="accordion-title" htmlFor="item-6">Как производится расчет стоимости?</label>
					<div className="accordion-text">
						<p>Расчет стоимости услуг зависит от типа груза, его объема и веса, желаемых сроков доставки.</p>
					</div>
				</div>
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-7"/>
					<label className="accordion-title" htmlFor="item-7">Имеются ли у вас скидки и программы лояльности для постоянных клиентов?</label>
					<div className="accordion-text">
						<p>Конечно! Постоянные заказчики всегда могут рассчитывать на скидки, интересные спецпредложения и бонусы. Компания «AIDADECK&nbsp;LOGISTICS» нацелена на длительное и взаимовыгодное сотрудничество со всеми клиентами и всегда готова пойти им навстречу.</p>
					</div>
				</div>
				<div className="accordion-item">
					<input className="accordion-input" type="checkbox" name="item" id="item-8"/>
					<label className="accordion-title" htmlFor="item-8">Какие условия осуществляет наша компания на территории Китая?</label>
					<div className="accordion-text">
						<ul>
							<li>поиск производителей и поставщиков</li>
							<li>оплата поставщику (0%)</li>
							<li>услуги переводчика</li>
							<li>организация поездок в Китай</li>
							<li>проверка и контроль качества</li>
							<li>и тд</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="accordion-link">
				<a href="https://wa.me/8613025100413" target="_blank" rel="noreferrer">Задать другой вопрос</a>
			</div>
	</div>
	);
}

export default Accordion;