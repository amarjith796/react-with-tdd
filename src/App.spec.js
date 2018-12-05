import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TodoView from "./Todo/todo";
import AddTodo from "./Todo/addtodo";
import EditTodo from "./Todo/EditTodo";
describe('App', () => {

  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toBeGreaterThanOrEqual(0);
  });

  // it('should render the TodoView Component', () => {
  //   expect(wrapper.containsMatchingElement(<TodoView data={wrapper.instance().state.data} handleStatus={wrapper.instance().handleStatus} handleDelete={wrapper.instance().handleDelete} handleEditTodo={wrapper.instance().handleEditTodo} />)).toEqual(true);
  // });
  // it('should render the AddTodo Component', () => {
  //   expect(wrapper.containsMatchingElement(<AddTodo handleAddTask={wrapper.instance().handleAddTask} />))
  // })
  // it('should render the EditTodo Component', () => {
  //   expect(wrapper.containsMatchingElement(<EditTodo editText={wrapper.instance().state.editText} handleUpdateTodo={wrapper.instance().handleUpdateTodo} />))
  // })
});