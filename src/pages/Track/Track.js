import React, { useState } from 'react';
import "./Track.scss";
import OrderService from "../../services/OrderService";
import activeImage from "../../img/trackPointActive.svg"
import inactiveImage from "../../img/trackPoint.svg"
import ruImg from "../../img/track-ru.jpg";
import kgImg from "../../img/track-kg.jpg";
import kzImg from "../../img/track-kz.jpg";



function Track() {
	const [orderId, setOrderId] = useState('');
	const [error, setError] = useState("");
	const [data, setData] = useState(null);


	const handleTrack = async () => {
		const trimmedOrderId = orderId.trim();
		if (!trimmedOrderId) {
			setError("Номер не может быть пустым");
			return;
		}
		try {
			const response = await OrderService.track(trimmedOrderId);
			setData(response.data);
			setError("");
		} catch (e) {
			if (e.response && e.response.status === 404) {
				setError("Заказ не найден. Свяжитесь с нами.");
			} else {
				setError("Ошибка сервера. Попробуйте позже.");
			}
			setData(null);
		}
	};



	return (
		<div className="track">
			<div className="track-container">
				<h1>Отслеживание товара</h1>
				<div className="orders-search-form">
					<div className="orders-search-form-search">
						<div className="orders-search-form-search-input">
							<div className="track-input">
								<label className={error ? "track-input-control error" : "track-input-control"}>
									<input className="track-input-input"
										   value={orderId}
										   onChange={(e) => setOrderId(e.target.value)}
										   placeholder={error ? error : "Номер заказа"}/>
								</label>
							</div>
						</div>
						<div>
							<button className="track-button button-desktop" onClick={handleTrack}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
									<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".8"
										  strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0"></path>
								</svg>
								Отследить
							</button>
							<button className="track-button icon button-mobile" onClick={handleTrack}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
									<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".8"
										  strokeWidth="2" d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0"></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="track-info-container">
				{
					data ?
						<div className="orders-track-form">
							<div className="order-recipient-info">
								<div className="tracking-short-details-info">
									<div className="tracking-short-details-card">
										<div className="tracking-short-details-card-row">
											<div className="tracking-short-details-card-row-label">Номер заказа</div>
											<div
												className="tracking-short-details-card-row-value">{data ? data.orderId : "..."}</div>
										</div>
										<div className="tracking-short-details-card-row">
											<div className="tracking-short-details-card-row-label">Адрес доставки</div>
											<div className="tracking-short-details-card-row-value">
												{
													(() => {
														switch (data.type) {
															case 'RU':
																return 'г. Москва, МКАД 19 километр\nЮжные ворота';
															case 'KG':
																return 'г. Бишкек';
															case 'KZ':
																return 'г. Алматы';
															default:
																return 'Адрес не определен';
														}
													})()
												}
											</div>

										</div>
										<div className="tracking-short-details-card-row">
											<div className="tracking-short-details-card-row-label">Ориентировочная дата прибытия</div>
											<div
												className="tracking-short-details-card-row-value">{data ? new Date(data.stageEndDate).toLocaleDateString() : "..."}</div>
										</div>
										<div className="tracking-city-image">
											{
												(() => {
													switch (data.type) {
														case 'RU':
															return <img src={ruImg} alt="Москва"/>;
														case 'KG':
															return <img src={kgImg} alt="Бишкек"/>;
														case 'KZ':
															return <img src={kzImg} alt="Алматы"/>;
														default:
															return <img src={ruImg} alt="Москва"/>;
													}
												})()
											}
										</div>
									</div>
								</div>
							</div>
							<div className="progress-bar">
								{data.stages.map((stage, index) => {
									const isActive = stage.isCompleted;

									return (
										<div key={index} className={`progress-stage ${isActive ? "active" : ""}`}>
											<span className="progress-duration">
											  {stage.date ? new Date(stage.date).toLocaleDateString() : "..."}
											</span>
											<div className="progress-name">
												<div className="progress-image">
													<img
														src={isActive ? activeImage : inactiveImage}
														alt="stage-icon"
													/>
												</div>
												<span>{stage.name}</span>
											</div>
										</div>
									);
								})}
							</div>
						</div> :
						<div className="orders-track-stub">
							<p className={error ? "message error" : "message"}>{error ? error : "Посылок нет. Введите ID заказа."}</p>
						</div>
				}
			</div>
		</div>
	);
}

export default Track;
