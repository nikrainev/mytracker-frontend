import * as axios from 'axios';
import store from "../redux/redux-store";
const authedInstance = axios.create({
    baseURL: 'http://nikrainev.ru:3000/'
})



export const authAPI = {
    getAuthInfo(){
        return authedInstance.get('auth/me', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    }
}