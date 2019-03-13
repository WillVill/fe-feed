import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import messageBoard from './pages/messageBoard/store/messageBoard.reducer';

const reducer = combineReducers({
	messageBoard
});

export default createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);