import {legacy_createStore} from 'redux';

const reduxDevtools=window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//le state initiale
const pyssInitialState={
    loading:false,
    pays:[

    ],
    erreur:''
}



const initialState=[
    {
        code:1,
        name:'Maroc',
        continent:'Afrique',
        surfaceArea:450000,
        image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyb2N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        indepYear:1956,
        population:40000000,
        cities:[
            {
                name:'Rabat',
                district:'province',
                population:1500000,
                capital:true
            },
            {
                name:'Mohammedia',
                district:'province',
                population:78545,
                capital:false
            },
        ]
    },
    {
        code:3,
        name:'Itali',
        continent:'Europe',
        surfaceArea:560000,
        image:'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyb2N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        indepYear:1946,
        population:60000000,
        cities:[
            {
                name:'Rome',
                district:'province',
                population:1500000,
                capital:true
            },
            {
                name:'Bergamo',
                district:'province',
                population:78545,
                capital:false
            },
        ]
    },
    {
        code:2,
        name:'France',
        continent:'Europe',
        surfaceArea:560000,
        image:'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJhbmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        indepYear:1946,
        population:80000000,
        cities:[
            {
                name:'Paris',
                district:'province',
                population:8500000,
                capital:true
            },
            {
                name:'Nante',
                district:'province',
                population:1450000,
                capital:false
            },
        ]
    }
]
// les créateurs d'action
export const addCitie=(citieData)=>{
    return {
        type:'ADD_CITIE',
        payload:citieData
    }
}

export const modifyPopulation=(population)=>{
    return{
        type:'MODIFY_POPULATION',
        payload:population        
    }
}

const reducer=(state,action)=>{
    switch (action.type) {
        case 'ADD_CITIE':
            const pays=state.find(item=>item.code===parseInt(action.payload.code))
            if (pays){
                pays.cities=[...pays.cities,action.payload.ville]
            }
            return state
        case 'MODIFY_POPULATION':
            const pays1=state.find(item=>item.code===parseInt(action.payload.code))
            if (pays1){
                pays1.population=action.payload.population
            }
            return state

        default:
            return state;
    }
}

export const store=legacy_createStore(reducer,initialState,reduxDevtools)