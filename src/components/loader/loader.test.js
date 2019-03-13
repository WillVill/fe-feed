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
		wrapper,
		loaderText: wrapper.find(".loader__text")
	};
};

describe('[Component] Loader', () => {
	it('renders', () => {
		const { wrapper } = setup();

		expect(toJson(wrapper)).toMatchSnapshot();
	});
	
	it('shows proper loading text', () => {
		const { loaderText } = setup();
	
		expect(loaderText.text()).toBe('loading...');
	});

	it('shows new loading text', () => {
		const { wrapper } = setup();

		wrapper.setProps({children: "Dude where's my car?"})
		expect(wrapper.find(".loader__text").text()).toBe('Dude where\'s my car?');
	});
});
