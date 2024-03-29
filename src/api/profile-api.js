import * as axios from 'axios';
import store from "../redux/redux-store";
const axiosInstance = axios.create({
    baseURL: 'https://trackyour.site:3443/profile'
})

export const profileAPI = {
    putProfileInfo(data){
        return axiosInstance.put('/', data, {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
                .catch(error => {
                    return error.response.data.error
                })
    },
    getProfileInfo(){
        return axiosInstance.get('/', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })

    },
    getProfileInfoById(userId){
        return axiosInstance.get('/userid/'+userId)
                .then(response =>{
                    return response.data;
                })
    },
    getProposals(){
        return axiosInstance.get('/your_proposals/', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data.proposals;
                })

    },

    getProfilesList(page, limit){
        return axiosInstance.get('/profileslist', {headers: {"Authorization": "Bearer "+store.getState().auth.token}, params: {page: page, limit: limit}})
                .then(response =>{
                    return response.data;
                })
    },
    getFriendsList(page, limit){
        return axiosInstance.get('/friends/', {headers: {"Authorization": "Bearer "+store.getState().auth.token}, params: {page: page, limit: limit}})
                .then(response =>{
                    return response.data;
                })
    },
    getAvatar(){
        return axiosInstance.get('/avatar', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data
                })
    },
    updateAvatar(file){
        let avatar = new FormData()
        avatar.append('avatarImage',file, 'image', )

        return axiosInstance.post('/avatar', avatar, {headers:
                    {"Authorization": "Bearer "+store.getState().auth.token, 'Content-Type': 'multipart/form-data' }})
                .then(response =>{
                    return response.data
                })
    }
}


export const profileActionsAPI = {
    postProposal(userId){
        return axiosInstance.post('/proposal/'+userId, null, {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    },

    deleteProposal(userId){
        return axiosInstance.delete('/proposal/'+userId,  {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    },
    acceptProposal(userId){
        return axiosInstance.post('/proposals/'+userId, null, {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    },
    denyProposal(userId){
        return axiosInstance.delete('/proposals/'+userId,  {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    },
    deleteFriend(userId){
        return axiosInstance.delete('/delete_friend/'+userId,  {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    }
}
