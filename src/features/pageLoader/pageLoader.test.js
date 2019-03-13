import React from 'react';
import LoaderPage from './pageLoader.component.jsx/index.js';
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
		wrapper,
		days: wrapper.find({ className: 'store-tasks__day-header' })
	};
};

describe('[Component] LoaderPage', () => {
	it('renders', () => {
		const { wrapper } = setup();

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

