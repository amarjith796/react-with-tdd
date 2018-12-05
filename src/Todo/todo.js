import React from 'react';
import PropTypes from 'prop-types';
const TodoView = ({ data, handleStatus, handleCheckedBox, handleDelete, handleEditTodo, handleDeleteSelected, handleDeleteAll }) => {
    let checked_data = data.map((d) => { if (d.checked) { return d.taskname } });
    const compact = (arr) => {
        return arr.filter(arrValue => arrValue != false && arrValue != "" && arrValue != undefined && arrValue != null);
    }
    checked_data = compact(checked_data)
    const handleCheckbox = (event) => {
        handleCheckedBox(event.target.value, event.target.checked);
    }
    return (
        <div style={{ background: "darkslategray", minHeight: '600px', width: '60vw' }}>
            <h2 style={{ textAlign: 'center' }}>TODO TASK </h2>
            <button onClick={() => { handleDeleteSelected(checked_data) }}>Delete Selected</button>
            &nbsp;<button onClick={handleDeleteAll}>DeleteAll</button>
            {
                data.map((d, i) => {
                    return (
                        <div key={i} style={{ display: 'flex' }}>
                            <p><input type='checkbox' checked={d.checked} value={d.taskname} onChange={handleCheckbox} /></p>
                            <p style={{ flex: 1, cursor: 'pointer', textDecoration: (d.status) ? 'line-through' : '' }} onClick={() => { handleStatus(d.taskname) }}> {`${i}. ${d.taskname} `}</p><p style={{ flex: 1, cursor: 'pointer' }}><i>{d.status ? 'completed' : 'incompleted'}</i></p>
                            <p style={{ flex: 1, cursor: 'pointer' }} onClick={() => { handleDelete(d) }}>Delete</p>
                            <p style={{ flex: 1, cursor: 'pointer' }} onClick={() => { handleEditTodo(d.taskname) }} >Edit</p>
                        </div>
                    )
                })
            }
        </div>
    );
};

TodoView.displayName = 'TodoView';

TodoView.propTypes = {
    data: PropTypes.array.isRequired,
    handleStatus: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEditTodo: PropTypes.func.isRequired,
    handleDeleteSelected: PropTypes.func.isRequired,
    handleDeleteAll: PropTypes.func
};

export default TodoView;
