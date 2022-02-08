export interface CarOptions {
    abs: boolean,
    window: boolean,
    sunroof: boolean,
    bluetooth: boolean,
    parking: boolean,
    navigation: boolean,
    computer: boolean,
    wheel: boolean
}

export interface CarPostRequest {
    img: string,
    model: string,
    description: string,
    carOptions: CarOptions
}

export interface Car {
    id: number,
    img: string,
    model: string,
    description: string,
    options: CarOptions
}