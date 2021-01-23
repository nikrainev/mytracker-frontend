import * as axios from 'axios';
import store from "../redux/redux-store";
const axiosInstance = axios.create({
    baseURL: 'http://nikrainev.ru:3000/profile'
})

export const profileAPI = {
    putProfileInfo(data){
        return axiosInstance.put('/', data, {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
                .catch(error => {
                    console.warn(error)
                })
    },
    getProfileInfo(){
        return axiosInstance.get('/', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    }
}
