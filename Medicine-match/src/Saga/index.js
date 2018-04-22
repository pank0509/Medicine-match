import { all } from 'redux-saga/effects'
import { addUserWatcherSaga } from './App/App-watcher-saga';

export default function* rootSaga() {
    yield all([
        addUserWatcherSaga(),
    ])
}
