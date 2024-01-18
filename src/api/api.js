import axios from "axios";
import store from "../app/store";

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 1000,
    headers: {
        Authorization: 'Bearer ' + store.getState().user.accessToken,
    }
});

export const signInAPI = (data) => backend.post(`/user/sign-in`, data);
export const signUpAPI = (data) => backend.post(`/user/sign-up`, data);

export const colorCreateAPI = (data) => backend.post(`/color`, data);
export const colorGetAPI = (page) => backend.get(`/color/${page}`);