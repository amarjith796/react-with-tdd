import React, { Component } from 'react';
import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import MyInput from './MyInput';
import { addValidationRule } from 'formsy-react';
function isNotBlankString(values, value) {
    return value && value.trim().length > 0;
}

addValidationRule('isNotBlankString', isNotBlankString);
class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: this.props.editText,
            canSubmit: false
        }
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);
    }
    componentWillReceiveProps(nextProps, prevState) {
        if (this.state.textInput != nextProps.editText) {
            this.setState({
                textInput: nextProps.editText
            })
        }
    }
    handleOnchange = (event) => {
        this.setState({
            textInput: event.target.value
        });
    }
    disableButton() {
        this.setState({ canSubmit: false });
    }

    enableButton() {
        this.setState({ canSubmit: true });
    }

    submit = (model) => {
        const { editText, handleUpdateTodo } = this.props;
        handleUpdateTodo(editText, model.text)
    }
    render() {
        const { editText, handleUpdateTodo } = this.props;
        const { textInput } = this.state;
        return (
            <div style={{ display: 'flex', width: '60vw' }}>
                {/* <input type='text' style={{ flex: 1 }} value={textInput} onChange={this.handleOnchange} /> */}
                <Formsy style={{ flex: 1, display: 'flex' }} onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                    <MyInput
                        name="text"
                        validations="isNotBlankString"
                        value={textInput}
                        validationError="Please enter the taskname"
                        required
                    />
                    <button type="submit" disabled={!this.state.canSubmit} style={{ padding: '10px', background: 'steelblue', border: '1px solid steelblue', cursor: 'pointer' }} >Update</button>
                </Formsy>
            </div>);
    }
}
EditTodo.propTypes = {
    editText: PropTypes.any,
    handleUpdateTodo: PropTypes.func
};

export default EditTodo;
