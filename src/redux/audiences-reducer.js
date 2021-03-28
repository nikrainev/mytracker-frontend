let initialState = {

        audiencelistData: [

            {
                id: 0,
                name: 'Аудитория 1',
                description: 'Описание',
                counters: [{counterId: 2, counterName: ''}, {counterId: 3, counterName: ''}],
                totalusers: '1003',
                usersnow: '200',
                status: 'work'
            },

            {
                id: 1,
                name: 'Аудитория 2',
                description: 'Описание',
                counters: [{counterId: 2, counterName: ''}, {counterId: 3, counterName: ''}],
                totalusers: '10000',
                usersnow: '200',
                status: 'work'
            },
            {
                id: 2,
                name: 'Аудитория 3',
                description: 'Описание',
                counters: [{counterId: 2, counterName: ''}, {counterId: 3, counterName: ''}],
                totalusers: '10000',
                usersnow: '200',
                status: 'work'
            },
            {
                id: 3,
                name: 'Аудитория 4',
                description: 'Описание',
                counters: [{counterId: 2, counterName: ''}, {counterId: 3, counterName: ''}],
                totalusers: '10000',
                usersnow: '200',
                status: 'work'
            },
            {
                id: 4,
                name: 'Аудитория 5',
                description: 'Описание',
                counters: [{counterId: 2, counterName: ''}, {counterId: 3, counterName: ''}],
                totalusers: '10000',
                usersnow: '200',
                status: 'work'
            }

        ],
        audienceNameInput: '',
        audienceDescriptionInput: '',
        AudienceCountersSelect: [{}],
        audienceCountersSelectSelected: {},
        audienceCounters: [{}],
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
    addCountersNames(){
        let i =0;
        while(i < this.audiencelistData.length){
            let i2 = 0;
            while(i2 < this.audiencelistData[i].counters.length){
                let counterId = this.audiencelistData[i].counters[i2].counterId
                this.audiencelistData[i].counters[i2].counterName = this.counterslistData[counterId].name
                i2++
            }
            i++;
        }
    },
    addAudienceSelectCounters(){
        let i = 0;
        while (i < this.counterslistData.length){
            let counter = {'counterId': this.counterslistData[i].id,
                'counterName': this.counterslistData[i].name};
            this.AudienceCountersSelect[i] = counter
            i++;
        }
    },



}




const audiencesReducer = (state = initialState,action) =>{
    switch (action.type){
        case "RELOAD-AUDIENCE-INPUT":
            return {
                ...state,
                [action.inputName] : action.value
            }
        case "RELOAD-AUDIENCE-COUNTERS-SELECT":
            let counterName = state.counterslistData.filter(counter => counter.id == action.counterId)
            let newAudienceCounter = {
                counterId: action.counterId,
                counterName: counterName[0].name
            }
            return {
                ...state,
                audienceCountersSelectSelected: newAudienceCounter
            }
        case 'ADD-AUDIENCE-COUNTER':
            let deleteOption = state.AudienceCountersSelect.findIndex(option => option.counterId === state.audienceCountersSelectSelected.counterId)
                let copySelect = [...state.AudienceCountersSelect]
                copySelect.splice(deleteOption,1)



            return {
                ...state,
                audienceCounters: [...state.audienceCounters, state.audienceCountersSelectSelected],
                AudienceCountersSelect: copySelect,
                audienceCountersSelectSelected: {}
            }
        case 'DELETE-AUDIENCE-COUNTER':
            let deletedCounter = state.audienceCounters.findIndex(counter => counter.counterId === action.counterId)

            let copydeletedCounter =  [...state.audienceCounters]
            copydeletedCounter.splice(deletedCounter ,1)
            let returnCounter = state.counterslistData.filter(counter => counter.id === action.counterId)
            return {
                ...state,
                audienceCounters: copydeletedCounter,
                AudienceCountersSelect: [...state.AudienceCountersSelect, {
                    counterId: action.counterId,
                    counterName: returnCounter[0].name
                }]
            }
        case 'ADD-AUDIENCE':
            debugger
            let audienceCounters = [...state.audienceCounters]
            audienceCounters.splice(0,1)

            let newAudience = {
                id: 5,
                name: state.audienceNameInput,
                description: state.audienceDescriptionInput,
                counters: audienceCounters,
                totalUsers: '100',
                usersnow: '2',
                status: '1'
            }

            return {
                ...state,
                audiencelistData: [...state.audiencelistData, newAudience],
                audienceNameInput: '',
                audienceDescriptionInput: '',
                audienceCounters: [{}],
                ...state.addAudienceSelectCounters()
            }
        default:
            state.addCountersNames()
            state.addAudienceSelectCounters()
            return state
    }

}

export const reloadAudienceInputActionCreator = (value, inputName) =>({
    type: 'RELOAD-AUDIENCE-INPUT',
    value: value,
    inputName: inputName})
export const reloadAudienceSelectActionCreator = (counterId) =>({
    type: 'RELOAD-AUDIENCE-COUNTERS-SELECT',
    counterId: counterId})
export const addAudienceCounterActionCreator = () =>({
    type: 'ADD-AUDIENCE-COUNTER'
})
export const addAudienceActionCreator = () =>({
    type: 'ADD-AUDIENCE'
})
export const deleteAudienceCounterActionCreator = (counterId) =>({
    type: 'DELETE-AUDIENCE-COUNTER',
    counterId: counterId
})

export default audiencesReducer