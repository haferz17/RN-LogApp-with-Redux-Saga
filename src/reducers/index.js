import { combineReducers } from 'redux';
import UserReducers from './UserReducers';

const allReducers = combineReducers({
    UserReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;