/*import countersReducer from "./counters-reducer";
import audiencesReducer from "./audiences-reducer";
let store = {
    _state:{
        summaryPage : {
            dayusersData : [
                {id:1, country:'Сша', time:'5:01', date: 'Сегодня в 2020', revenue:0},
                {id:2, country:'Россия', time:'5:01', date: 'Сегодня в 2020', revenue:0},
                {id:3, country:'Китай', time:'5:01', date: 'Сегодня в 2020', revenue:0},
                {id:4, country:'Россия', time:'5:01', date: 'Сегодня в 2020', revenue:0},
                {id:5, country:'Россия', time:'5:01', date: 'Сегодня в 2020', revenue:0}
            ],
            graphicData : [
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:20, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:40, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"},
                {value:30, day:"Вчера 11:00 - 12:00"}

            ]
        },

        countersPage : {
            counterslistData : [
                {id:0, name:'Счётчик y', domen:'ya.ru', dayusers:100, total: '10000', status:'work'},
                {id:1, name:'Счётчик 2', domen:'vk.com', dayusers:100, total: '10000', status:'notwork'},
                {id:2, name:'Счётчик 3', domen:'facebook.ru', dayusers:200, total: '10000', status:'notwork'},
                {id:3, name:'Счётчик 4', domen:'google.com', dayusers:100, total: '10000', status:'work'},
                {id:4, name:'Счётчик 5', domen:'mail.ru', dayusers:200, total: '10000', status:'notwork'},
                {id:5, name:'Счётчик 6', domen:'google.com', dayusers:100, total: '10000', status:'work'},
                {id:6, name:'Счётчик z', domen:'vk.ru', dayusers:200, total: '10000', status:'notwork'},
                {id:7, name:'Счётчик 8', domen:'google.com', dayusers:100, total: '10000', status:'work'}

            ],
            counterNameInput: '',
            counterDomenInput: ''

        },
        audiencePage : {
            audiencelistData : [
                {id:0, name: 'Аудитория 1', description: 'Описание', counters: [{counterId:2,counterName:''},{counterId:3, counterName:''}], countersNames: [], totalusers: '1003', usersnow: '200', status : 'work'},
                {id:1, name: 'Аудитория 2', description: 'Описание', counters: [{counterId:2,counterName:''},{counterId:3, counterName:''}], countersNames: [], totalusers: '10000', usersnow: '200', status : 'work'},
                {id:2, name: 'Аудитория 3', description: 'Описание', counters: [{counterId:2,counterName:''},{counterId:3, counterName:''}], countersNames: [], totalusers: '10000', usersnow: '200', status : 'work'},
                {id:3, name: 'Аудитория 4', description: 'Описание', counters: [{counterId:2,counterName:''},{counterId:3, counterName:''}], countersNames: [], totalusers: '10000', usersnow: '200', status : 'work'},
                {id:4, name: 'Аудитория 5', description: 'Описание', counters: [{counterId:2,counterName:''},{counterId:3, counterName:''}], countersNames: [], totalusers: '10000', usersnow: '200', status : 'work'}

            ],
            audienceNameInput:'',
            audienceDescriptionInput:'',
            AudienceCountersSelect: [{}],
            audienceCountersSelectSelected: [{}],
            audienceCounters: [{}]
        }

    },

       _callSubscriber(){
            console.log('changed')
        },
        subscribe(observer){
            this._callSubscriber = observer
        },

        getState(){
            return this._state
        },
        dispatch(action){
        this._state.countersPage = countersReducer(this._state.countersPage,action)
        this._state = audiencesReducer(this._state,action)
            this._callSubscriber(this._state);
        }


}


store.addCountersNames()
store.addAudienceSelectCounters()

export default store; */