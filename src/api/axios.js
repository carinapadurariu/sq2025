import axios from './axios';
const BASE_URL = 'https://team1-backend-jpdqtnohpq-uc.a.run.app/swagger-ui/index.html';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json',
    'Authorization' : 'Bearer ' + localStorage.getItem('token')},
    withCredentials: true
});