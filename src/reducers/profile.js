import initialState from './initialState';
import * as types from '../constants/types';

/**
 * The profile reducer controls the state of the actual profile objects. 
 * We are storing them here in a Map because that data structure is well-suited to shallow key-value lookup with preserved insertion order
 * @method profile
 * @module githubprofile/reducers
 * @param  {Map} [state=initialState.posts] initial state of the reducer
 * @param  {object} action                     Redux action
 * @return {object}                            next state for slice
 */
export default function profile (state = initialState.profile, action) {
    switch (action.type) {
        
        //  we just need to update the individual post with the response we
        // get back from the server
        case types.profile.GET: {
            let nextState = Object.assign({}, state);
            const oldProfile = nextState[action.profile];
            nextState[action.profile] = Object.assign({}, oldProfile, action.profile);
            return nextState;
        }
        
        
        default:
            return state;
    }
}

