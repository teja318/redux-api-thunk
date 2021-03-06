import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {decremetNumber, incremetNumber, removeNumber} from '../../actions/numbersAction'
const NumbersList = (props) => {
    const dispatch = useDispatch()
    const numbers = useSelector((state) => {
        return state.numbers
    })
    const handleDecrement = (id) =>{
        dispatch(decremetNumber(id))
    }
    const handleIncrement = (id) =>{
        dispatch(incremetNumber(id))
    }
    const handleRemove = (id) => {
        dispatch(removeNumber(id))
    }

    return (
        <div>
            <h2>Listing Numbers </h2>
            <ul>
                {
                    numbers.map((num) =>{
                        return <li key={num.id}>{num.value} 
                            <button onClick={() =>{
                                handleDecrement(num.id)
                            }}>-</button> 
                            <button onClick={() =>{
                                handleIncrement(num.id)
                            }}>+</button> 
                            <button onClick={() =>{
                                handleRemove(num.id)
                            }}>x</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
export default NumbersList