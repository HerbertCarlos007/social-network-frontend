import api from "./api";

async function createAboutMe(aboutMeData) {
    const response = await api.post('/about-me', aboutMeData)
    return response
}

async function getAboutMe() {
    const response = await api.get('/about-me')
    return response
}

async function updateAboutMe(userId, aboutMeData) {
    const response = await api.put(`/about-me/${userId}`, aboutMeData)
    return response
}

export default {
    createAboutMe, getAboutMe,updateAboutMe
}