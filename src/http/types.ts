export enum CountryType {
    RU = 'RU',
    KZ = 'KZ',
    KG = 'KG',
}

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser {
    email: string;
    id: string;
    role: string;
}

export interface Stage {
    name: string;
    date: string;
    isCompleted: boolean;
}

export interface OrderResponse {
    id: number;
    order_id: string;
    current_stage: string;
    stage_end_date: string;
    createdAt: string;
    isPaused: boolean;
    isFast: boolean;
    type: CountryType;
}

export interface TrackResponse {
    order_id: string;
    stageEndDate: string;
    stages: Stage[];
    type: CountryType;
}