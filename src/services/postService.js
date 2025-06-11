import api from "./api";

async function getAllPosts() {
    const response = await api.get('posts')
    return response
}

async function createPost(formdata) {
    try {
        const response = await api.post('posts', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}


export default {
    getAllPosts, createPost
}