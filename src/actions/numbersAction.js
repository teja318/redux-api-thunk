export const addNumber = (num) => {
    return{
        type: 'ADD_NUMBER',
        payload: num
    }
}
export const plusTwo = () =>{
    return{
        type: 'PLUS_TWO'
    }
}
export const removeAll = () =>{
    return{
        type: 'REMOVE_ALL'
    }
}
export const decremetNumber = (id) => {
    return{
        type: 'DECREMENT_NUMBER',
        payload: id
    }
}
export const incremetNumber = (id) => {
    return{
        type: 'INCREMENT_NUMBER',
        payload: id
    }
}
export const removeNumber = (id) => {
    return{
        type: 'REMOVE_NUMBER',
        payload: id
    }
}