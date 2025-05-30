import {API_URL} from "../http/index";
import {AuthResponse, IUser} from "../http/types";
import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";

class AuthStore {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    errors = {} as Record<string, string>;


    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    setError(field: string, errorMessage: string) {
        this.errors[field] = errorMessage;
    }

    clearErrors() {
        this.errors = {};
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.clearErrors();
        } catch (e: any) {
            this.clearErrors();
            if (e.response?.data?.message) {
                this.clearErrors();
                if (e.response?.status === 400 && e.response.data?.message) {
                    if (e.response.data?.message === "Пользователь с таким email не найден") {
                        this.setError("email", e.response.data?.message);
                    } else if (e.response.data?.message === "Неверный пароль") {
                        this.setError("password", e.response.data?.message);
                    }
                }
            } else {
                console.log("Произошла ошибка при входе:", e.message);
                this.setError("general", "Произошла ошибка при входе");
            }
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await AuthService.refresh();
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem('token');
            this.setAuth(false);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }
}

export default AuthStore;
