import api from "./api";

async function createComment(postId, content) {

    const commentData = {
        post_id: postId,
        content
    }

    const response = await api.post('comments', commentData)
    return response
}

export default {
    createComment
}