import api from "./api";

async function login(formdata) {
    try {
        const response = await api.post('login', formdata)
        return response
    } catch (error) {
        console.error(error)
    }
}

async function register(data) {
    const response = await api.post('users', data)
    return response
}

export default {
    login, register
}