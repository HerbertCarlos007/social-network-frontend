import api from "./api";

async function login(data) {
    const response = await api.post('login', data)
    return response
}

export default login