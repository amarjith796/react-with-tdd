import React from 'react';
import { shallow } from 'enzyme';
import TodoView from './Todo/todo';

describe("TodoView", () => {

	let wrapper;
	beforeEach(() => wrapper = shallow(<TodoView data={[]} handleDeleteSelected={jest.fn()} handleStatus={jest.fn()} handleDelete={jest.fn()} handleEditTodo={jest.fn()} />));
	it('should render correctly', () => expect(wrapper).toMatchSnapshot());
	it('should render a <div />', () => {
		expect(wrapper.find('div').length).toEqual(1);
	});
})