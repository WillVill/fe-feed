import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PageLoader } from '../../features';

export default class MessageBoard extends Component {
	render() {
		const { posts, loading } = this.props;

		return (
			<div className='message-board'>
				{loading ?
					<PageLoader />
					:
					<Fragment>
						{posts.map((post, index) =>
							<div key={index} className="message-board__post">{post.value}</div>
						)}
					</Fragment>
				}
			</div>
		);
	}
}

MessageBoard.defaultProps = {
	posts: [],
	loading: false
};

MessageBoard.propTypes = {
	posts: PropTypes.array,
	loading: PropTypes.bool
};
