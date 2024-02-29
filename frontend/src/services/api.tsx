import axios from "axios";
import { getFromLocalStorage } from "./functions";

type UserData = {
    email: string, password: string
}
type userInfo = {
    values: {
        username: string, email: string, password: string
    },
    id: number
}

axios.interceptors.request.use(function (config) {
    console.log('config', config);
    const isUserData = getFromLocalStorage('userData')
    if (!isUserData) return config
    const token = JSON.parse(isUserData).access_token
    config.headers.Authorization = 'Bearer ' + token;
    return config;
}, function (error) {
    return Promise.reject(error);
});


export const createUser = (userData: UserData) => {
    const username = (userData.email).split('@')[0]
    return axios.post(import.meta.env.VITE_SERVER_API + 'users', { ...userData, username }).then((response) => response.data)
}

export const submitGoggle = () => {
    return axios.get(import.meta.env.VITE_SERVER_API + 'auth/google').then((response) => response.data)
}

export const signInJWT = (userData: UserData) => {
    return axios.post(import.meta.env.VITE_SERVER_API + 'auth', userData).then((response) => response.data)
}
export const updateUserInfo = (userInfo: userInfo) => {
    console.log('userInfo', userInfo);
    return axios.patch(import.meta.env.VITE_SERVER_API + 'users/' + userInfo.id, userInfo.values).then((response) => response.data)
}
