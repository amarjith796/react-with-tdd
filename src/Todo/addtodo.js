import React from 'react';
import PropTypes from 'prop-types';
const AddTodo = ({ handleAddTask }) => {
    let textInput = React.createRef();
    return (
        <div style={{ display: 'flex', width: '60vw' }}>
            <input ref={textInput} style={{ flex: 1 }} />
            <button style={{ padding: '10px', background: 'steelblue', border: '1px solid steelblue', cursor: 'pointer' }} onClick={() => { handleAddTask(textInput.current.value); textInput.current.value = ''; }}>
                Addtodo
            </button>
        </div>
    );
}

AddTodo.propTypes = {
    handleAddTask: PropTypes.func.isRequired
};

export default AddTodo;