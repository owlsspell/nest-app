import axios from "axios";

export const createUser = (userData: { email: string, password: string }) => {
    const username = (userData.email).split('@')[0]
    return axios.post(import.meta.env.VITE_SERVER_API + 'users', { ...userData, username }).then((response) => response.data)
}