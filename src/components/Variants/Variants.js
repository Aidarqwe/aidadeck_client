import React from 'react';
import "./Variants.scss";
import legalImg from "../../img/variantsLegal.png";
import cargoImg from "../../img/variantsCargo.png";
import dashImg from "../../img/variantsAdvantages.svg";
import dashBlueImg from "../../img/variantsAdvantagesBlue.svg";
import tetherImg from "../../img/tether.svg";
import logoDexpay from "../../img/logoDexpay.svg";
import {useNavigate} from "react-router-dom";

function Variants() {
	const navigate = useNavigate();

	const linkToCargo = () => {
		navigate("/service");
		window.scrollTo(0, 0);
	}

	const linkToLegal = () => {
		navigate("/legal");
		window.scrollTo(0, 0);
	}

	return (
		<div className="variants_wrapper">
			<div className="variants">
				<div className="__legal">
					<div className="__title">
						<h4>Доставка в Белую</h4>
						<p>Официально, со всем пакетом документов.</p>
						<img src={legalImg} alt="img"/>
					</div>
					<div className="__conditions">
						<div className="__subtitle">Преимущества:</div>
						<ul className="__list">
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Полный пакет документов</strong>: Таможенные декларации, накладные, счета и
									другие документы от продавца.
								</li>
							</div>
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Маркировка "Честный знак"</strong>: Возможность легально торговать на
									маркетплейсах, таких как Ozon и Wildberries.
								</li>
							</div>
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Необходимые сертификаты</strong>: Все сертификаты на товар, соответствующие
									требованиям законодательства.
								</li>
							</div>
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Легальная торговля</strong>: Гарантированное соблюдение всех норм и
									стандартов, что исключает риски штрафов или блокировок.
								</li>
							</div>
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Репутация</strong>: Прозрачная и надежная работа повышает доверие со стороны
									партнеров и клиентов.
								</li>
							</div>
						</ul>
					</div>
					<div className="__more_btn">
						<button onClick={linkToLegal}>Подробнее</button>
					</div>
				</div>
				<div className="__cargo">
					<div className="__title">
						<h4>Доставка Карго</h4>
						<p>Быстрая надежная доставка (выкуп, упаковка).</p>
						<img src={cargoImg} alt="img"/>
					</div>
					<div className="__conditions">
						<div className="__subtitle">Преимущества:</div>
						<ul className="__list">
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Без лишних документов</strong>: Нет необходимости в сертификатах и сложных
									оформлениях.
								</li>
							</div>
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Быстрая доставка</strong>: Минимальные задержки, сроки от 10 до 20 дней.
								</li>
							</div>
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Гибкие условия</strong>: Упрощенная упаковка, выкуп товаров по запросу.</li>
							</div>

							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Экономия</strong>: Снижение затрат на логистику и оформление.</li>
							</div>
							<div className="__item">
								<img src={dashImg} alt="img"/>
								<li><strong>Широкий ассортимент</strong>: Возможность привезти разные категории товаров.
								</li>
							</div>
						</ul>
					</div>
					<div className="__more_btn">
						<button onClick={linkToCargo}>Подробнее</button>
					</div>
				</div>
			</div>
			<div className="__exchanger">
				<div className="__title">
					<h4>Стираем финансовые границы</h4>
					<p>между странами для покупателей, путешественников, предпринимателей и инвесторов.</p>
					<img src={tetherImg} alt="img"/>
				</div>
				<div className="__target">
					<div className="__conditions">
						<div className="__subtitle">Оплата иностранных инвойсов:</div>
						<ul className="__list">
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Оплатить поставщикам за товар или услуги за рубежом</strong>:
									Быстрое и безопасное проведение оплат через USDT, без риска
									блокировок.
								</li>
							</div>
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Выплачивать зарплату сотрудникам, внештатным исполнителям и представителям
									за границей</strong>:
									без валютного контроля и банковских сложностей.
								</li>
							</div>
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Оплачивать работу агентов, складов, брокеров и фулфилмент-центров</strong>:
									Упростим расчёты с логистическими партнёрами в любой стране.
								</li>
							</div>
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Оформить все закрывающие документы для бухгалтерии</strong>:
									Предоставляем полный комплект документов для отчётности юр. лиц в РФ.
								</li>
							</div>
						</ul>
					</div>
					<div className="__dexpay_icon">
						<img src={logoDexpay} alt="img"/>
						<p>DEXPAY</p>
					</div>
					<div className="__conditions">
						<div className="__subtitle">Для личных целей:</div>
						<ul className="__list">
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Взять с собой средства в поездку или при переезде за границу</strong>:
									Оформим покупку USDT с фискализированным чеком — всё легально и
									без ограничений.
								</li>
							</div>
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Оплатить онлайн-покупки и услуги за рубежом</strong>:
									Платите за бронирование отелей, покупку техники или аренду авто. Оплата проходит
									через стабильный актив — конфиденциально и без банковского контроля.
								</li>
							</div>
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Все операции прозрачны и легальны</strong>:
									Каждая продажа физическому лицу сопровождается фискализированным чеком в
									соответствии с законодательством РФ.
								</li>
							</div>
							<div className="__item">
								<img src={dashBlueImg} alt="img"/>
								<li><strong>Перевести деньги близким в другую страну</strong>:
									Надёжная передача средств в любую точку мира — быстро, прозрачно и без лишних
									комиссий.
								</li>
							</div>
						</ul>
					</div>
				</div>
				<div className="__more_btn">
					<a href="https://dexpay.ru/?utm_source=aidadeck&utm_medium=referral&utm_campaign=crosslink&utm_content=banner"
					   target="_blank" rel="noopener noreferrer">
						<button>Перейти на сервис</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Variants;