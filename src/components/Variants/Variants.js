import React from 'react';
import "./Variants.scss";
import legalImg from "../../img/variantsLegal.png";
import cargoImg from "../../img/variantsCargo.png";
import dashImg from "../../img/variantsAdvantages.svg";
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
							<li><strong>Полный пакет документов</strong>:  Таможенные декларации, накладные, счета и другие документы от продавца.</li>
						</div>
						<div className="__item">
							<img src={dashImg} alt="img"/>
							<li><strong>Маркировка "Честный знак"</strong>:  Возможность легально торговать на маркетплейсах, таких как Ozon и Wildberries.</li>
						</div>
						<div className="__item">
							<img src={dashImg} alt="img"/>
							<li><strong>Необходимые сертификаты</strong>: Все сертификаты на товар, соответствующие требованиям законодательства.</li>
						</div>
						<div className="__item">
							<img src={dashImg} alt="img"/>
							<li><strong>Легальная торговля</strong>: Гарантированное соблюдение всех норм и стандартов, что исключает риски штрафов или блокировок.</li>
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
							<li><strong>Быстрая доставка</strong>: Минимальные задержки, сроки от 10 до 20 дней.</li>
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
	);
}

export default Variants;