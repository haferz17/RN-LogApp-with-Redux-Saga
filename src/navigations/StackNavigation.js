import {  
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';
import UserList from '../components/UserList';
import Schedule from '../components/Schedule';
import UserContainer from '../containers/UserContainer';

const AppStack = createStackNavigator({
    UserContainer: {
        screen: UserContainer,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    Schedule: {
        screen: Schedule,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    }
})

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
    },{
        initialRouteName: 'App'
    }
))