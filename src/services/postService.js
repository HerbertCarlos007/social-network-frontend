import api from "./api";

async function getAllPosts() {
    const response = await api.get('posts')
    return response
}


export default {
    getAllPosts
}