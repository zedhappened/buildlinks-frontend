import axios from "axios";

const backend = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 1000,
});

export const signInAPI = (data) => backend.post(`/user/sign-in`, data);
export const signUpAPI = (data) => backend.post(`/user/sign-up`, data);