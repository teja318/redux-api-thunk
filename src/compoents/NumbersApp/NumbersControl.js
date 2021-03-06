import React from 'react'
import {addNumber, plusTwo, removeAll} from '../../actions/numbersAction'
import {useDispatch} from 'react-redux'
const NumbersControl = (props) => {
    
    const dispatch = useDispatch()
    const generateNumber = () => {
        
        const randomNumber = Math.round(Math.random() * 100)
        const num ={
            id: Number(new Date()),
            value: randomNumber
        }
        dispatch(addNumber(num))
    }
    const handlePlusTwo = () =>{
        dispatch(plusTwo())
    }
    const handleRemoveAll = () => {
        dispatch(removeAll())
    }
    return (
        <div>
            
            <button onClick={generateNumber}>Generator</button>  <b> </b>
            <button onClick={handlePlusTwo}>+2</button> <b> </b>
            <button onClick={handleRemoveAll}>Remove All</button>
        </div>
    )
}
export default NumbersControl