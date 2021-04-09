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
        return authedInstance.put('confirm_email/'+token)
                .then(response =>{
                    return response.data.message
                })
                .catch(error=>{

                    return error.response.data.error
                })
    },
    sendEmail(){

        return authedInstance.post('send_message/', {}, {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response=>{
            return response
        })
    },
    putAdditionalInfo(name, soName, company, description){
        return authedInstance.put('additional_information/', {name: name, soName: soName, company: company, descriptions: description},
                {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response
                }
    )
    }

}