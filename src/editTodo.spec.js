import React from 'react';
import { shallow } from 'enzyme';
import EditTodo from './Todo/EditTodo';
import MyInput from "./Todo/MyInput";
describe('EditTodo', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<EditTodo editText={""} handleUpdateTodo={jest.fn()} />));
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toBeGreaterThanOrEqual(1);
    });
    it('should render the MyInput Component', () => {
        expect(wrapper.containsMatchingElement(<MyInput name="text"
            validations="isNotBlankString"
            value={wrapper.instance().state.textInput}
            validationError="Please enter the taskname"
            required />))
    })
});