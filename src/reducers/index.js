import { combineReducers } from 'redux'
import todos from './todo.reducers'
const todoApp = combineReducers({
    todos
})

export default todoApp