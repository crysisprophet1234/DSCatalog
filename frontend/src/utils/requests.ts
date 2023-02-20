import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import history from './history';

//import * as dotenv from 'dotenv'
//dotenv.config();

type LoginResponse = {

    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;

}

//export const BASE_URL = process.env.BASE_URL;

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {

    username: string
    password: string

}

export const requestBackend = (config: AxiosRequestConfig) => {

    const headers = { ...config.headers };

    if (config.withCredentials) {

        headers.Authorization = `Bearer ${getAuthData()?.access_token}`;

    }

    return axios({ ...config, baseURL: BASE_URL, headers });

}

export const requestBackendLogin = (loginData: LoginData) => {

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify({

        username: loginData.username,
        password: loginData.password,
        grant_type: 'password'

    });

    return axios({ method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data, headers });

}

export const saveAuthData = (loginResponse: LoginResponse) => {

    localStorage.setItem('authData', JSON.stringify(loginResponse));

}

export const getAuthData = () => {

    try {

        const str = localStorage.getItem('authData') ?? "";
        return JSON.parse(str) as LoginResponse;

    } catch (err) {

    };

}

axios.interceptors.request.use(function (config) {
    console.log('INTERCEPTOR BEFORE REQUEST')
    return config;
}, function (error) {
    console.log('INTERCEPTOR REQUEST ERROR')
    return Promise.reject(error);

});

axios.interceptors.response.use(function (response) {
    console.log('INTERCEPTOR SUCESSFUL RESPONSE')
    return response;
}, function (error) {

    const status = error.response.status;
    
    if (status === 401 /* status === 403 --handling do 403 exibido na página */) {
        history.push('/admin/auth/login');
    }

    return Promise.reject(error);
});

