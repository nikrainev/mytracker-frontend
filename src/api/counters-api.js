import * as axios from 'axios';
import store from "../redux/redux-store";
const axiosInstance = axios.create({
    baseURL: 'https://trackyour.site:3443/counters'
})

export const countersAPI = {
    postCounter(data){
        return axiosInstance.post('/', data, {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
                .catch(error => {
                    console.warn(error)
                })
    },
    getYourCounters(page, limit){
        return axiosInstance.get('/', {headers: {"Authorization": "Bearer "+store.getState().auth.token}, params: {page: page, limit: limit}})
                .then(response =>{
                    return response.data;
                })
    },
    getFriendsCounters(page, limit){
        return axiosInstance.get('/friendscounters', {headers: {"Authorization": "Bearer "+store.getState().auth.token}, params: {page: page, limit: limit}})
                .then(response=>{
                    return response.data
                })
    },
    getCounterById(counterId){
        return axiosInstance.get('/counter/'+counterId, {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    }
}
