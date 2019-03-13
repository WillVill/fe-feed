export const SET_POSTS = 'MESSAGE_BOARD/SET_POSTS';

/**
 * @function setPosts
 * @description Sets posts
 * @param {array} payload array of posts
 */
export const setPosts = payload => {
	return { type: SET_POSTS, payload };
};
