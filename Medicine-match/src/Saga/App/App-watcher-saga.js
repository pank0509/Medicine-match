import { ADD_USER_REQUEST } from '../../Redux/App/App-actions';
import { takeLatest } from 'redux-saga/effects';
import { addUsertWorkerSaga } from './App-worker-saga';

export function* addUserWatcherSaga() {
    yield takeLatest(ADD_USER_REQUEST, addUsertWorkerSaga);
}
