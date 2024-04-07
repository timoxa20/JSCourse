import axios from "axios";

 const $apiCity = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1',
    headers: { 'X-Api-Key': 'qBp16x6JNuuqybKVoQWFdQ==g593kyubtOmB5XnE'},
})

$apiCity.interceptors.request.use(config => {
    // Добавляем заголовок 'X-Api-Key' к каждому запросу
    config.headers['X-Api-Key'] = 'qBp16x6JNuuqybKVoQWFdQ==g593kyubtOmB5XnE';
    return config;
});

export { $apiCity }



export const $apiWeather = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5',
})