import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './loader.css';

export default class Loader extends PureComponent {
	render() {
		const { children, className, size, active } = this.props;

		const classnames = cx('loader', {
			[`${className}`]: className,
			[`loader--${size}`]: size,
			[`loader--${active}`]: active
		});

		return (
			<div className={classnames}>
				<div className="loader__spinner" />
				<span className="loader__text">{children}</span>
			</div>
		);
	}
}

Loader.defaultProps = {
	size: 'small'
};

Loader.propTypes = {
	// shared props
	className: PropTypes.string,
	children: PropTypes.node,
	size: PropTypes.string,
	active: PropTypes.bool
};
