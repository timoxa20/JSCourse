interface ICoord {
    lat: number;
    lon: number;
}

export interface City {
    id: number
    name: string
    country: string
    coord: ICoord
}

export interface ICityParams {
    name?: string;
    limit?: number;
    lang?: string;
    lon?: number;
    lat?: number
}