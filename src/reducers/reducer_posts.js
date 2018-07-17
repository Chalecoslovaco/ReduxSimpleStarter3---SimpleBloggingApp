import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST_BY_ID, DELETE_POST } from '../actions';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST_BY_ID:
            /*const post = action.payload.data;
            const newState = { ...state };
            newState[post.id] = post;
            return newState;*/ //ES5
            return { ...state, [action.payload.data.id]: action.payload.data} //ES6
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}