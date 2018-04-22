import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_USER_SUCCESS } from '../../Redux/App/App-actions';

export function* addUsertWorkerSaga(action) {
    try {
        const response = yield call(axios.post, action.api, action.userData);
        yield put({
            type: ADD_USER_SUCCESS,
            userData: response.data,
        });
    } catch (e) {
        console.log('error in api call', e);
    }
}
