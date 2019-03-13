import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import {
	MessageBoard
} from './index.js';

const ProtectedRoute = ({ component: Component, ...props }) => {
	// TODO: Implement Auth0 authentication
	// checkIfAuthenticated();
	return <Route {...props} render={(props) => ( <Component {...props} /> )} />;
};

ProtectedRoute.propTypes = {
	component: PropTypes.func
};

function PagesRoutes({ location }) {
	return (
		<Fragment>
			<TransitionGroup
				childFactory={child =>
					React.cloneElement(child, {
						classNames: location.state ? location.state.transition : '',
						timeout: location.state ? location.state.duration : 0
					})
				}>
				{/* Timeout is defined in order to get rid of warning message */}
				<CSSTransition key={location.key} timeout={0}>
					<div className="page-wrapper">
						{/* Passing location gets rid of animation issue rendering the same exiting and entering route
						This happens as location is immutable and the base location is not */}
						<Switch location={location}>
							<ProtectedRoute exact path="/" component={MessageBoard} />
						</Switch>
					</div>
				</CSSTransition>
			</TransitionGroup>
			{/* This is the path that is rendered when logging in */}
		</Fragment>
	);
}

PagesRoutes.propTypes = {
	location: PropTypes.object
};

export default withRouter(PagesRoutes);
