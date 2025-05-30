import $api from "../http/index";
import {OrderResponse, TrackResponse} from "../http/types";
import {AxiosResponse} from 'axios';


export default class OrderService {
    static async track(id: string): Promise<AxiosResponse<TrackResponse>> {
        return $api.post<TrackResponse>('/track', {id})
    }

    static async create(id: string, speed: string, type: string): Promise<AxiosResponse<void>> {
        return $api.post('/create', { id, speed, type });
    }

    static async getAll(): Promise<OrderResponse[]> {
        const response = await $api.get<OrderResponse[]>('/getAll');
        return response.data;
    }
}