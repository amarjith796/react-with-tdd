import { ADD_TODO, EDIT_TODO, DELETE_TODO, COMPLETE_TODO, UPDATE_EDIT_TASK, DELETE_TODO_SELECTED, DELETE_TODO_ALL, CHECKBOX_SELECT } from "../actions/todo.actions"

const initialState = {
    data: [{ taskname: 'C', status: true },
    { taskname: 'C++', status: false, checked: false },
    { taskname: 'Java', status: false, checked: true },
    { taskname: 'Python', status: false, checked: false },
    { taskname: 'COBOL', status: false, checked: false }],
    editText: ''
}


const todos = (state = initialState, { type, payload }) => {
    let data = [...state.data]
    switch (type) {
        case ADD_TODO:
            data.push({
                taskname: payload.taskname,
                status: false
            });
            return {
                ...state,
                data: data
            };
        case EDIT_TODO:
            return {
                ...state,
                editText: payload.taskname
            };
        case UPDATE_EDIT_TASK:
            data[payload.index].taskname = payload.taskname;
            return {
                ...state,
                data: data,
                editText: ''
            }
        case CHECKBOX_SELECT:
            data[payload.index].checked = payload.checked;
            console.log(data)
            return {
                ...state,
                data: data,
                editText: ''
            }
        case DELETE_TODO:
            data = data.filter(d => d.taskname != payload.taskname);
            return {
                ...state,
                data: data,
                editText: ''
            };
        case DELETE_TODO_SELECTED:
            data = data.filter(val => !payload.tasknames.includes(val.taskname));
            return {
                ...state,
                data: data
            };
        case DELETE_TODO_ALL:
            data = [];
            return {
                ...state,
                data: data
            };
        case COMPLETE_TODO:
            data[payload.index].status = !data[payload.index].status;
            return {
                ...state,
                data: data
            };
        default:
            return state;
    }
}
export default todos;