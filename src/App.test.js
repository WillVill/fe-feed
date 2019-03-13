import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Test Setup
const setup = propOverrides => {
	const wrapper = shallow(<App />);

	return {
		wrapper
	};
};

describe('[Component] WorkplaceSelection', () => {
	it('renders', () => {
		const { wrapper } = setup();

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});
