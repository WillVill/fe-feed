import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loader } from '../../components';

import './pageLoader.css';

class PageLoader extends Component {

	render() {
		let { text } = this.props;

		return (
			<div className='loader-wrapper'>
				<Loader active size='large'>{text}</Loader>
			</div>
		);
	}
}

PageLoader.defaultProps = {
	text: 'loading...'
};

PageLoader.propTypes = {
	text: PropTypes.string,
};

export default PageLoader;