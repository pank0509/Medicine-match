import {
    ADD_USER_SUCCESS
} from './App-actions';

const appReducer = (state = {}, action) => {
    let newState = state;
    console.log('this is pankaj data',action);
    switch (action.type) {
        case ADD_USER_SUCCESS:
            newState = action.userData;
            break;
        default:
            newState = state;
    }

    if (newState !== state) {
        console.log('action:', action, 'state:', state, 'newState:', newState);
    }
    return newState;
};

export default appReducer;

