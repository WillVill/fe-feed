import React from 'react';
import Loader from './loader';
// Importing shallow and toJson.
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

const setup = propOverrides => {
	const props = Object.assign({
		children: 'loading...',
		size: 'large',
		active: true
	}, propOverrides);

	const wrapper = shallow(<Loader {...props} />);

	return {
		props,
		wrapper
	};
};

describe('[Component] Loader', () => {
	it('renders', () => {
		const { wrapper } = setup();

		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

it('shows proper loading text', () => {
	const { wrapper } = setup();

	expect(toJson(wrapper)).toMatchSnapshot();
});

