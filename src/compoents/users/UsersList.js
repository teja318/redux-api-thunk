import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {startGetUsers} from '../../actions/usersAction'
const UsersList=(props) =>{
    const users = useSelector((state) =>{
        return state.users
    })

    const dispatch = useDispatch()
    
    useEffect(() =>{
        dispatch(startGetUsers())
    }, [])

    
    return (
        <div>
            <h2>Listing Users - {users.length}</h2>
            <ul>
                {
                    users.map((ele, i) =>{
                        return <li key={i}>{ele.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default UsersList