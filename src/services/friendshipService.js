import api from "./api";

async function getAllFriendshipRequest() {
    const response = await api.get('friend-requests')
    return response.data
}

export default {
    getAllFriendshipRequest
}