import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Calculator.scss";
import close from "../../img/close.svg";

function Calculator() {
	const shippingOptions = [
		{ id: 1, name: 'Авто доставка', pricePerKg: 1.5},
		{ id: 2, name: 'Авиа доставка', pricePerKg: 7},
		{ id: 3, name: 'Морская доставка', pricePerKg: 0.7},
		{ id: 4, name: 'Ж/Д доставка', pricePerKg: 2}
	];

	const productTypes = [
		{ id: 1, name: 'Электроника' },
		{ id: 2, name: 'Мебель' },
		{ id: 3, name: 'Одежда' },
		{ id: 4, name: 'Техника' },
		{ id: 5, name: 'Опасные грузы' },

	];

		const [active, setActive] = useState(false)
		const [weight, setWeight] = useState(0);
		const [volume, setVolume] = useState(0);
		const [shippingOption, setShippingOption] = useState(shippingOptions[0]);
		const [density, setDensity] = useState(0);
		const [total, setTotal] = useState(0);
		const [weightDirty, setWeightDirty] = useState(false);
		const [volumeDirty, setVolumeDirty] = useState(false);
		const [weightError, setWeightError] = useState("Поле не может быть пустым !");
		const [volumeError, setVolumeError] = useState("Поле не может быть пустым !");
		const [isValid, setIsValid] = useState(false);
		const regexp = /^([0-9]+)([.,]?)([0-9]*)$/;


		useEffect(() => {
			if(weightError || volumeError){
				setIsValid(false);
			}else {
				setIsValid(true);
			}
		}, [weightError, volumeError])

		const blurHandler = (e) => {
			switch (e.target.name){
				case "weight":
					setWeightDirty(true)
					break;
				case "volume":
					setVolumeDirty(true)
					break;
				default:
					break;
			}
		};


	const calculateShippingCost = () => {
		const densityElem = weight/volume;
		const totalNum = densityElem * shippingOption.pricePerKg;
		return [setTotal(+totalNum.toFixed(1)) , setDensity(+densityElem.toFixed(1)), setActive(true)];
	};

	function handleWeightChange(e) {
		const weightReplace = e.target.value.replace(/,/g, '.');
		setWeight(+weightReplace);
		if(!regexp.test(e.target.value)){
			setWeightError("Введите число !")
		}else if(e.target.value < 20){
			setWeightError("Вес должен быть больше 20кг!")
		}else {
			setWeightError("");
		}
	}

	function handleVolumeChange(e) {
		const volumeReplace = e.target.value.replace(/,/g, '.');
		setVolume(+volumeReplace);
		if(!regexp.test(e.target.value)){
			setVolumeError("Введите число !")
		}else {
			setVolumeError("");
		}

	}

	function handleShippingOptionChange(e) {
		const selectedOption = shippingOptions.find(option => option.id === parseInt(e.target.value));
		setShippingOption(selectedOption);
	}

	function scrollTop(){
		window.scrollTo(0,0);
	}

	return (
		<div className="calculator-body">
			<div className="calculator-inputs">
				<div className="calculator-item">
					<label htmlFor="weight">Вес*</label>
					<input
						id="weight"
						type="text"
						placeholder="Введите вес в кг ..."
						name="weight"
						onBlur={ e => blurHandler(e) }
						onChange={ e => handleWeightChange(e) }
					/>
					{(weightDirty && weightError) && <div className="calculator-error">{weightError}</div>}
				</div>
				<div className="calculator-item">
					<label htmlFor="volume">Объем*</label>
					<input
						id="volume"
						type="text"
						placeholder="Введите обьем в м&sup3; ..."
						name="volume"
						onChange={ e => handleVolumeChange(e) }
						onBlur={ e => blurHandler(e) }
					/>
					{(volumeDirty && volumeError) && <div className="calculator-error">{volumeError}</div>}
				</div>
			</div>

			<div className="calculator-item">
				<label htmlFor="shippingOption">Способ отправки:</label>
				<select id="shippingOption" value={shippingOption.id} onChange={handleShippingOptionChange}>
					{shippingOptions.map(option => (
						<option key={option.id} value={option.id}>{option.name}</option>
					))}
				</select>
			</div>
			<div className="calculator-item">
				<label htmlFor="productType">Тип товара:</label>
				<select id="productType">
					{productTypes.map(type => (
						<option key={type.id} value={type.id}>{type.name}</option>
					))}
				</select>
			</div>
			<button disabled={!isValid} onClick={() => calculateShippingCost()}>Рассчитать</button>
			<div className="important-link">
				<Link to="/important" onClick={() => scrollTop()}>Важная информация!</Link>
			</div>
			<div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
				<div className={active ? "modal-content active" : "modal-content"} onClick={e => e.stopPropagation()}>
					<div className="modal-close" onClick={() => setActive(false)}>
						<img src={close} alt="img"/>
					</div>
					<p>Плотность: <span>{density} кг/м&sup3;</span></p>
					<p>Цена за 1 кг: <span> {shippingOption.pricePerKg}$</span></p>
					<p>Стоимость доставки: <span> {total}$</span></p>
				</div>
			</div>
		</div>
	);
}

export default Calculator;