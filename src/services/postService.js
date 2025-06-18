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

async function likePost(postId) {
    const likeData = {
        post_id: postId
    }
    const response = await api.post('likes', likeData)
    return response
}

export default {
    getAllPosts, createPost, likePost
}