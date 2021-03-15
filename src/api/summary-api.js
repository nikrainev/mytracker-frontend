
import * as axios from 'axios';
import store from "../redux/redux-store";
const axiosInstance = axios.create({
    baseURL: 'https://trackyour.site:3443/users/'
})

export const summaryAPI = {
    getSummary(){
        return axiosInstance.get('/summary/', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data;
                })
    },
    getSummaryGraphic(){
        return axiosInstance.get('/summary/graphic', {headers: {"Authorization": "Bearer "+store.getState().auth.token}})
                .then(response =>{
                    return response.data.graphicArr;
                })
    }
}
