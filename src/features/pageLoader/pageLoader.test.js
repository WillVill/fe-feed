import React from 'react';
import LoaderPage from './pageLoader.component.jsx';
// Importing shallow and toJson.
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

// Test Setup
const setup = propOverrides => {
	const props = Object.assign({
		text: "loading..."
	}, propOverrides);

	const wrapper = shallow(<LoaderPage {...props} />);

	return {
		props,
		wrapper
	};
};

describe('[Feature] pageLoader', () => {
	it('renders', () => {
		const { wrapper } = setup();
		expect(toJson(wrapper)).toMatchSnapshot();
	});

	it('passes proper text prop', () => {
		const { wrapper } = setup();
		expect(wrapper.find('Loader').props().children).toEqual("loading...");
	});

	it('passes proper changed text prop', () => {
		const { wrapper } = setup({text: "Gnarley text"});
		expect(wrapper.find('Loader').props().children).toEqual("Gnarley text");
	});
});

