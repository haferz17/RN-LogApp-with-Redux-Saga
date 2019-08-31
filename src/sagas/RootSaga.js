import { all } from 'redux-saga/effects';
import { watchFetchUsers, watchAddNewUser } from './UserSaga';

export default function* rootSaga() {
    yield all([
        watchFetchUsers(),
        watchAddNewUser()
    ])             
}