import { connect } from 'react-redux';
import UserList from '../components/UserList';

//Actions ?
import { addUserAction, fetchUsersAction } from '../actions';

const mapStateToProps = (state) => {   
    return {        
        users: state.UserReducers.users,
        loading: state.UserReducers.loading,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {    
        onFetchUsers: () => {         
            dispatch(fetchUsersAction());
        }, 
        //Not necessary !   
        // onSuccessFetch: () => {                        
        //     dispatch(fetchSuccessAction());
        // }, 
        onAddUser: (newUser) => {                        
            dispatch(addUserAction(newUser));
        },
    };
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserContainer;