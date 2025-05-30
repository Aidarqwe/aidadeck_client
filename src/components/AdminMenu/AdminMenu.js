import React, {useContext} from 'react';
import "./AdminMenu.scss";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";

function AdminMenu({selectedItem, setSelectedItem, setSelectedButton}) {
	const {store} = useContext(Context);
	const navigate = useNavigate();


	const handleButtonChange = (data) => {
		setSelectedButton(data);
		setSelectedItem(data);
	}

	const handleLogout = () => {
		store.logout();
		navigate("/");
	};

	return (
		<div className="__menu">
			<div className="__item">
				<button className={`__list_item ${selectedItem === 'create' ? 'selected' : ''}`} onClick={() => handleButtonChange("create")}>
					<div className="__image">
						<svg className="__profile_svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M16 8a4 4 0 11-8 0 4 4 0 018 0zm-8 6a4 4 0 00-4 4v2h16v-2a4 4 0 00-4-4H8z"></path>
						</svg>
					</div>
					<span>Создать</span>
				</button>
			</div>
			<div className="__item">
				<button className= {`__list_item ${selectedItem === 'list' ? 'selected' : ''}`} onClick={() => handleButtonChange("list")}>
					<div className="__image">
						<svg className="__profile_svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M4.5 3v18h4.91A7.5 7.5 0 0118.5 9.365V7l-4-4h-10zm16 13a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-4.79-2.875h-2v4l3.031 1.75 1-1.732-2.031-1.173v-2.845z"></path>
						</svg>
					</div>
					<span>Заказы</span>
				</button>
			</div>
			<div className="__item">
				<button className={`__list_item ${selectedItem === 'logout' ? 'selected' : ''}`} onClick={() => handleLogout()}>
					<div className="__image">
						<svg className="__profile_svg"
							 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
							<g id="SVGRepo_iconCarrier">
								<path d="M21 12L13 12" stroke="#fff" strokeWidth="2" strokeLinecap="round"
									  strokeLinejoin="round"></path>
								<path
									d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
									stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
								<path
									d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
									stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#172734"></path>
							</g>
						</svg>
					</div>
					<span>Выйти</span>
				</button>
			</div>
		</div>
	);
}

export default AdminMenu;