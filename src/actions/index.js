import { ADD_USER, FETCH_USERS, FETCH_SUCCEEDED, FETCH_FAILED } from './actionType';

export const fetchUsersAction = () => {
    return {
        type: FETCH_USERS,
    }
}

export const addUserAction = (newUser) => {
    return {
        type: ADD_USER,
        newUser
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedUsers) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedUsers
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}