import $api, {API_URL} from "../http/index";
import {AuthResponse} from "../http/types";
import {AxiosResponse} from 'axios';


export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async refresh(): Promise<AxiosResponse<AuthResponse>>{
        return $api.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
    }

    static async logout(): Promise<AxiosResponse<void>> {
        return $api.post('/logout');
    }
}