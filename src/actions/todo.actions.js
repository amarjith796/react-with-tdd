export const ADD_TODO = "ADD_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const UPDATE_EDIT_TASK = "UPDATE_EDIT_TASK";
export const DELETE_TODO_SELECTED = "DELETE_TODO_SELECTED";
export const DELETE_TODO_ALL = "DELETE_TODO_ALL";
export const CHECKBOX_SELECT = "CHECKBOX_SELECT";

export const handleCompleteTask = (index, taskname) => {
    return {
        type: COMPLETE_TODO,
        payload: { index: index, taskname: taskname }
    }
}

export const handleAddTask = (taskname) => {
    return {
        type: ADD_TODO,
        payload: { taskname: taskname }
    }
}

export const handleDeleteSelectedTask = (tasknames) => {
    return {
        type: DELETE_TODO_SELECTED,
        payload: { tasknames: tasknames }
    }
}
export const handleDeleteAll = () => {
    return {
        type: DELETE_TODO_ALL
    }
}
export const handleEditTask = (taskname) => {
    return {
        type: EDIT_TODO,
        payload: { taskname: taskname }
    }
}
export const handleUpdateEditTask = (index, taskname) => {
    return {
        type: UPDATE_EDIT_TASK,
        payload: { index: index, taskname: taskname }
    }
}
export const handleDeleteTask = (taskname) => {
    return {
        type: DELETE_TODO,
        payload: { taskname: taskname }
    }
}
export const handleCheckedBox = (index, taskname, checked) => {
    return {
        type: CHECKBOX_SELECT,
        payload: { index: index, taskname: taskname, checked: checked }
    }
}