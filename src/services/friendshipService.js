import api from "./api";

async function getAllFriends() {
    const response = await api.get('friends')
    return response.data
}

async function getAllFriendshipRequest() {
    const response = await api.get('friend-requests')
    return response.data
}

async function requestFriendship(id) {
    const response = await api.post(`friend-request/send/${id}`)
    return response.data
}

async function acceptFriendRequest(id) {
    const response = await api.post(`friend-request/accept/${id}`)
    return response.data
}

async function rejectFriendRequest(id) {
    const response = await api.post(`friend-request/reject/${id}`)
    return response.data
}

async function deleteFriend(id) {
     const response = await api.delete(`friend-delete/${id}`)
      return response.data
}

async function getNonFriends() {
    const response = await api.get('non-friends')
    return response.data
}

export default {
    getAllFriends, getAllFriendshipRequest, acceptFriendRequest, rejectFriendRequest, deleteFriend, getNonFriends, requestFriendship
}