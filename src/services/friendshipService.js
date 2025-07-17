import api from "./api";

async function getAllFriendshipRequest() {
    const response = await api.get('friend-requests')
    return response.data
}

async function acceptFriendRequest(id) {
    const response = await api.post(`friend-request/accept/${id}`)
    return response.data
}

export default {
    getAllFriendshipRequest, acceptFriendRequest
}