
export const ADD_USER_REQUEST = '@@user/ADD_USER_REQUEST';
export const ADD_USER_SUCCESS = '@@user/ADD_USER_SUCCESS';
export const ADD_USER_FAILURE = '@@user/ADD_USER_FAILURE';

export const addUserRequest = (userData) => ({
    type: ADD_USER_REQUEST,
    api: 'http://localhost:3000/users',
    userData,
});
