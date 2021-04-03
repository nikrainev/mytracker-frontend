import * as axios from 'axios';
import store from "../redux/redux-store";
const authedInstance = axios.create({
    baseURL: 'https://trackyour.site:3443/auth/'
})



export const authAPI = {
    getAuthInfo(){
        return authedInstance.get('me', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    },
    postLoginInfo(email,password){
        return authedInstance.post('login',{"email": email, "password":password})
                .then(response =>{
            return response.data;
        })
    }

}

export const signUpAPI = {
    postSignUpInfo(email,login,password){
        return authedInstance.post('signup',{"email":email,"login":login,"password":password})
                .then(response =>{
                    return response;
                })
    },
    confirmEmail(token){
        return authedInstance.put('confirmemail/'+token)
                .then(response =>{
                    return response;
                })
                .catch(error=>{
                    return error
                })
    }

}