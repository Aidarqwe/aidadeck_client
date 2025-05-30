import React, { useState } from 'react';
import './AdminCreateOrder.scss';
import OrderService from "../../services/OrderService";

function AdminCreateOrder() {
    const [orderId, setOrderId] = useState('');
    const [orderSpeed, setOrderSpeed] = useState('');
    const [selectedSpeedLabel, setSelectedSpeedLabel] = useState('Скорость доставки');

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCountryLabel, setSelectedCountryLabel] = useState('Страна доставки');

    const [isSpeedDropdownOpen, setIsSpeedDropdownOpen] = useState(false);
    const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

    const [errorFields, setErrorFields] = useState({});

    const speedOptions = ['Быстрая', 'Медленная'];
    const countryOptions = [
        { label: 'Россия', value: 'RU' },
        { label: 'Кыргызстан', value: 'KG' },
        { label: 'Казахстан', value: 'KZ' },
    ];

    const handleOrderCreation = async () => {
        let errors = {};
        if (!orderId) errors.orderId = true;
        if (!orderSpeed || selectedSpeedLabel === 'Скорость доставки') errors.orderSpeed = true;
        if (!selectedCountry || selectedCountryLabel === 'Место пребывания') errors.selectedCountry = true;

        if (Object.keys(errors).length > 0) {
            setErrorFields(errors);
            return;
        }

        setErrorFields({});
        try {
            await OrderService.create(orderId, orderSpeed, selectedCountry);
            setOrderId('');
            setOrderSpeed('');
            setSelectedSpeedLabel('Скорость доставки');
            setSelectedCountry('');
            setSelectedCountryLabel('Место пребывания');
        } catch (e) {
            console.error("Ошибка создания заказа:", e);
        }
    };

    const handleSpeedSelect = (option) => {
        setOrderSpeed(option);
        setSelectedSpeedLabel(option);
        setIsSpeedDropdownOpen(false);
    };

    const handleCountrySelect = (option) => {
        setSelectedCountry(option.value);
        setSelectedCountryLabel(option.label);
        setIsCountryDropdownOpen(false);
    };

    return (
        <div className="create">
            <div className="input-container">
                <input
                    type="text"
                    className={`order-input ${errorFields.orderId ? 'error' : ''}`}
                    placeholder="Введите номер заказа"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value.trim())}
                />


                <div className={`custom-select ${errorFields.orderSpeed ? 'error' : ''}`}>
                    <div
                        className="select-header"
                        onClick={() => {
                            setIsSpeedDropdownOpen(!isSpeedDropdownOpen);
                            setIsCountryDropdownOpen(false);
                        }}
                    >
                        {selectedSpeedLabel}
                        <span className={`arrow ${isSpeedDropdownOpen ? 'open' : ''}`}>▼</span>
                    </div>
                    {isSpeedDropdownOpen && (
                        <ul className="select-options">
                            {speedOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="select-option"
                                    onClick={() => handleSpeedSelect(option)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className={`custom-select ${errorFields.selectedCountry ? 'error' : ''}`}>
                    <div
                        className="select-header"
                        onClick={() => {
                            setIsCountryDropdownOpen(!isCountryDropdownOpen);
                            setIsSpeedDropdownOpen(false);
                        }}
                    >
                        {selectedCountryLabel}
                        <span className={`arrow ${isCountryDropdownOpen ? 'open' : ''}`}>▼</span>
                    </div>
                    {isCountryDropdownOpen && (
                        <ul className="select-options">
                            {countryOptions.map((option, index) => (
                                <li
                                    key={index}
                                    className="select-option"
                                    onClick={() => handleCountrySelect(option)}
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button className="create-btn" onClick={handleOrderCreation}>
                    Создать заказ
                </button>
            </div>
        </div>
    );
}

export default AdminCreateOrder;
