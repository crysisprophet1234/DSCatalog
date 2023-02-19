import axios from 'axios';
import qs from 'qs';

type LoginResponse = {

    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string;
    userId: number;

}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'dscatalog';

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'dscatalog123';

type LoginData = {

    username: string,
    password: string

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

    const str = localStorage.getItem('authData') ?? "";
    return JSON.parse(str) as LoginResponse;

}