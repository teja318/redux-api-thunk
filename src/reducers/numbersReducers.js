const numbersIntialState = []

const numbersReducer = (state = numbersIntialState, action) =>{
    //console.log( 'reducer', state)
    switch(action.type){
        case 'ADD_NUMBER':{
            return [...state, {...action.payload}]
        }
        case 'PLUS_TWO':{
            return state.map((num) =>{
                return {
                    ...num, 
                    value: num.value + 2
                }
            })
        }
        case 'REMOVE_ALL':{
            return []
        }
        case 'DECREMENT_NUMBER':{
            return state.map((ele) =>{
                if(ele.id === action.payload){
                    return{...ele, value: ele.value - 1}
                }else{
                    return {...ele}
                }
            })
        }
        case 'INCREMENT_NUMBER':{
            return state.map((ele) =>{
                if(ele.id === action.payload){
                    return{...ele, value: ele.value + 1}
                }else{
                    return {...ele}
                }
            })
        }
        case 'REMOVE_NUMBER' : {
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }
        default:{
            return [...state] //es5 [].concat(state)
        }
    }
}
export default numbersReducer