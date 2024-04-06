import axios from "axios";

export const $apiCity = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1',
    headers: { 'X-Api-Key': 'qBp16x6JNuuqybKVoQWFdQ==g593kyubtOmB5XnE'},
})



export const $apiWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
})