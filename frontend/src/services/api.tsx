import axios from "axios";

type UserData = {
    email: string, password: string
}

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
