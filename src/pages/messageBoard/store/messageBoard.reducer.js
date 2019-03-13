import { SET_POSTS } from './messageBoard.actions';

const initState = {
	posts: []
};

export default (state = initState, action) => {
	switch (action.type) {

	case SET_POSTS:
		return {...state, posts: action.payload};

	default:
		return state;
	}
};

