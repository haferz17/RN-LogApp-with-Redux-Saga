import { ADD_USER, FETCH_USERS, FETCH_SUCCEEDED, FETCH_FAILED } from '../actions/actionType';
const UserReducers = (users = {}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {loading: true}
        case FETCH_SUCCEEDED:
            return {users: action.receivedUsers, loading: action.loading}
        case FETCH_FAILED:
            return [];
        default:
            return users; //state does not change
    }
}

export default UserReducers;