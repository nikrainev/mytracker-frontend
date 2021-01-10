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
    },
    postLoginInfo(email,password){
        return authedInstance.post('auth/login',{"email": email, "password":password})
                .then(response =>{
            return response.data;
        })
    }

}

export const signUpApi = {
    postSignUpInfo(email,login,password){
        return authedInstance.post('auth/signup',{"email":email,"login":login,"password":password})
                .then(response =>{
                    return response;
                })
    }

}