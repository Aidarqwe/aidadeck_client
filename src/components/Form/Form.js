import React, {useState} from 'react';
import {Link} from "react-router-dom";
import emailJs from '@emailjs/browser';
import "./Form.scss";

function Form() {
	const [formData, setFormData] = useState({});
	const [formErrors, setFormErrors] = useState({});
	const [privacyChecked, setPrivacyChecked] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	function scrollTop(){
		window.scrollTo(0,0);
	}
	const handleInputChange = (e) => {
		const { name, value } = e.target;

		if (name === 'username') {
			if(value === ""){
				setFormErrors({ ...formErrors, username: 'Заполните поле!' });
			} else {
				setFormErrors({ ...formErrors, username: null });
			}
		}
		if (name === 'email') {
			const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if(value === ""){
				setFormErrors({ ...formErrors, email: 'Заполните поле!' });
			}
			else if (!emailPattern.test(value)) {
				setFormErrors({ ...formErrors, email: 'Введите почту правильно!' });
			}
			else {
				setFormErrors({ ...formErrors, email: null });
			}
		}
		if (name === 'message') {
			if (value.trim() === "") {
				setFormErrors({ ...formErrors, message: 'Заполните поле!' });
			} else {
				setFormErrors({ ...formErrors, message: null });
			}
		}
		if(name === "privacy"){
			if(value.checked === false){
				setFormErrors({ ...formErrors, privacy: "Согласитесь с политикой конфиденцальности!"})
		}else {
				setPrivacyChecked(true)
				setFormErrors({ ...formErrors, privacy: null });
			}
		}
		setFormData({ ...formData, [name]: value });
	};

	function handleSubmit(e){
		e.preventDefault();
		const nameError = formErrors.name;
		const emailError = formErrors.email;
		const messageError = formErrors.message;
		const privacyError = formErrors.privacy;
		if (!nameError && !emailError && !messageError && !privacyError && privacyChecked) {
			emailJs
				.sendForm('service_vuuxcld', 'template_x7sz76q', e.target, 'A2uPCQ5UpjeHPOYNe')
				.then((response) => {
					console.log('SUCCESS!', response.status, response.text);
					setFormData({});
					setFormErrors({});
					setPrivacyChecked(false);
					setFormSubmitted(true);
					setTimeout(() => setFormSubmitted(false), 3000);
				}, (error) => {
					console.log('FAILED...', error);
				})
		}else {
			setFormErrors({ ...formErrors, textSend: 'Пожалуйста, заполните все поля и примите политику конфиденциальности!' });
		}
	}

	return (
		<div className="form-wrapper">
			<h1>Связаться с нами</h1>
			{formSubmitted ? <p className="success-message">Форма успешно отправлена!</p> : formErrors.textSend && <p className="error-message">{formErrors.textSend}</p>}
			<form onSubmit={handleSubmit} className="form-body">
				<div className="form-item">
					<label className="form-label">Имя*: </label>
					<input
						type="text"
						placeholder="Введите имя"
						name="username"
						className="form-input"
						onChange={handleInputChange}
						value={formData.username || ""}
					/>
					{formErrors.username && <p>{formErrors.username}</p>}
				</div>
				<div className="form-item">
					<label className="form-label">E-mail*: </label>
					<input
						type="text"
						placeholder="Введите почту"
						name="email"
						className="form-input"
						onChange={handleInputChange}
						value={formData.email || ""}
					/>
					{formErrors.email && <p>{formErrors.email}</p>}
				</div>
				<div className="form-item">
					<label className="form-label">Ваш вопрос*: </label>
					<textarea
						name="message"
						className="form-input"
						onChange={handleInputChange}
						value={formData.message || ""}
					/>
					{formErrors.message && <p>{formErrors.message}</p>}
				</div>
				<div className="form-item">
					<div className="checkbox">
						<input type="checkbox"
						       name="privacy"
						       className="checkbox-input"
						       checked={privacyChecked}
						       onChange={handleInputChange}
						/>
						<label className="checkbox-label">
							<span> Я согласен(а) на обработку персональных данных и принимаю <Link to="/politic" onClick={() => scrollTop()}>политику конфиденциальности </Link>*</span>
							{formErrors.privacy && <p>{formErrors.privacy}</p>}
						</label>
					</div>
				</div>
				<button type="submit" className="form-button">Отправить</button>
			</form>
		</div>
	);
}

export default Form;