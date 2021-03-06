import axios from 'axios'

// startGetUsers
export const startGetUsers = () =>{
     return (dispatch) =>{
         axios.get('https://jsonplaceholder.typicode.com/users')
             .then((response) =>{
                 const users = response.data
                 dispatch(setUsers(users))
             })
             .catch((err) =>{
                 alert(err.message)
             })
     }
}

//setUsers
export const setUsers = (users) =>{
    return{
         type: "SET_USERS",
         payload: users
     }
}