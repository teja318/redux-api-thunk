import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import numbersReducer from '../reducers/numbersReducers'
import usersReducer from '../reducers/usersReducer'
import postsReducer from '../reducers/postsReducer'

const configureStore = () =>{
    const store = createStore(combineReducers({
        numbers: numbersReducer,
        users: usersReducer,
        posts: postsReducer
    }), applyMiddleware(thunk))
    return store
}
export default configureStore