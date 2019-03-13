import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setPosts } from './store/messageBoard.actions';

import MessageBoard from './messageBoard.component';

import './messageBoard.css';

class MessageBoardContainer extends Component {
	componentDidMount() {
		const { setPosts } = this.props;

		setPosts([{value: "post 1"}, {value: "post 2"}]);
	}

	render() {
		const { posts, loading } = this.props;

		return (
			<MessageBoard posts={posts} loading={loading} />
		);
	}
}

MessageBoardContainer.propTypes = {
	posts: PropTypes.array,
	loading: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		setPosts
	}, dispatch);
};

const mapStateToProps = (state) => ({
	posts: state.messageBoard.posts
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardContainer);