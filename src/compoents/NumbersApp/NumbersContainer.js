import React from 'react'
import {useSelector} from 'react-redux'
import NumbersList from './NumbersList'
import NumbersControl from './NumbersControl'
import AddNuber from './AddNumber'
const NumbersContainer = (props) => {
    const numbers = useSelector((state) => {
        return state.numbers
    })
    const findSum = () => {
        let sum = 0
        numbers.forEach(ele => {
            sum += ele.value
        })
        return sum
    }
    return (
        <div>
            <h2>Listing - {numbers.length}, Sum - {findSum()} </h2>
            <NumbersList />
            <NumbersControl />
            <AddNuber />
        </div>
    )
}
export default NumbersContainer