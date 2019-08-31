import { FETCH_USERS, FETCH_SUCCEEDED, FETCH_FAILED, ADD_USER } from '../actions/actionType';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchUsers() {
    try {
        const receivedUsers = yield Api.getUsersFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedUsers, loading:false });     
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }    
    
}
export function* watchFetchUsers() {
    yield takeLatest(FETCH_USERS, fetchUsers);
}

//Add new User
function* addNewUser(action) {     
    try {
        const receivedUsers = yield Api.getUsersFromApi();   
        let newData = yield Api.insertNewUserFromApi(action.newUser);
        let newUsers = receivedUsers;
        newUsers.push(newData)
        // if (result === true) {
        yield put({ type: FETCH_USERS, receivedUsers: newUsers });     
        // }
    } catch (error) {        
        //do nothing
    }
}
export function* watchAddNewUser() {            
    yield takeLatest(ADD_USER, addNewUser);
}
