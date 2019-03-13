import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PageLoader } from '../../features';

import './messageBoard.css';

class MessageBoard extends Component {

	render() {
		let { text } = this.props;

		return (
			<div className='message-board'>
			</div>
		);
	}
}

MessageBoard.defaultProps = {
	text: 'loading...'
};

MessageBoard.propTypes = {
	text: PropTypes.string,
};

export default MessageBoard;