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
export const colorEditAPI = (id, data) => backend.patch(`/color/${id}`, data);
export const colorGetByIdAPI = (id) => backend.get(`/color/${id}`);
export const colorGetAPI = (page, search) => backend.get(`/color?search=${search}&page=${page}`);
export const colorDeleteAPI = (id) => backend.delete(`/color/${id}`);

export const categoryCreateAPI = (data) => backend.post(`/category`, data);
export const categoryEditAPI = (id, data) => backend.patch(`/category/${id}`, data);
export const categoryGetByIdAPI = (id) => backend.get(`/category/${id}`);
export const categoryGetAPI = (page, search) => backend.get(`/category?search=${search}&page=${page}`);
export const categoryGetAllAPI = () => backend.get(`/category/all`);
export const categoryGetParentsAPI = () => backend.get(`/category/parents`);
export const categoryDeleteAPI = (id) => backend.delete(`/category/${id}`);