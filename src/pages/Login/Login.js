import React, {useContext, useState} from "react";
import "./Login.scss";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const {store} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) =>{
        e.preventDefault();
        setEmail(e.target.value)
    }

    const passwordHandler = (e) =>{
        e.preventDefault();
        setPassword(e.target.value)
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await store.login(email, password);
            if (!Object.keys(store.errors).length) {
                navigate('/admin');
            }
        } catch (error) {
            console.error('Ошибка при входе:', error);
        }
    };

    return (
        <div className="page-container">
            <div className="login-wrapper">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="form-title">Авторизация</h2>
                    <div className="form-group">
                        <input
                            className="input-login"
                            onChange={(e) => emailHandler(e)}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="input-login"
                            value={password}
                            onChange={(e) => passwordHandler(e)}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Пароль"
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};

export default observer(Login);