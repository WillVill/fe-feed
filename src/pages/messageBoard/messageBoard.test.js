import React from 'react';
import MessageBoard from './messageBoard.component';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
// import { PageLoader } from '../../features';

// Test Setup
const setup = propOverrides => {
	const props = Object.assign({
		posts: [{value: "post 1"}, {value: "post 2"}],
		loading: false
	}, propOverrides);

	const wrapper = shallow(<MessageBoard {...props} />);

	return {
		props,
		wrapper,
		posts: wrapper.find('.message-board__post')
	};
};

describe('[Page] MessageBoard', () => {
	it('renders', () => {
		const { wrapper } = setup();

		expect(toJson(wrapper)).toMatchSnapshot();
	});

	describe('Rendering posts', () => {
		it('There are 2 posts', () => {
			const { posts } = setup();
			expect(posts).toHaveLength(2);
		});

		it('There are 5 posts', () => {
			const { wrapper } = setup({ posts: [{value: "post 1"}, {value: "post 2"}, {value: "post 3"}, {value: "post 4"}, {value: "post 5"}]});
			expect(wrapper.find('.message-board__post')).toHaveLength(5);
		});

		it('No posts when loading', () => {
			const { wrapper } = setup({loading: true});
			expect(wrapper.find('.message-board__post')).toHaveLength(0);
		});
	})

	describe('Loader', () => {
		it('Loader isn\'t initially shown', () => {
			const { wrapper } = setup();

			expect(wrapper.find('PageLoader')).toHaveLength(0);
		});

		it('Loader is shown when prop is true', () => {
			const { wrapper } = setup({loading: true});

			expect(wrapper.find('PageLoader')).toHaveLength(1);
		});
	})
});
