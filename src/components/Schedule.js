import React, { Component } from 'react';
import {  
    View,
    Text,
    FlatList,
    Button
} from 'react-native';
import moment from 'moment';

export default class UserList extends Component {
    constructor(props){
        super(props);
    }
    renderItem = ({item,index}) => {
        const { time } = this.props
        return (
            <View style={{padding:10,width:'100%',backgroundColor:'cyan'}}>
                <Text>{item.task}</Text>
                <Text>{item.time}</Text>
                {
                    time[index]!==undefined ?
                    <Text>{moment(time[index],'HH.mm').add(-1,'minutes').format('HH.mm')}</Text> : null
                }
            </View>
        )
    }
    render(){
        const { name } = this.props.task[0]
        const { task } = this.props
        return(
            <View style={{flex:1}}>
                <Text>{name}</Text>
                <Text>{moment().format('dddd, DD MMMM YYYY')}</Text>
                <Button title="Back" onPress={()=>this.props.action()}/>
                <FlatList
                    data={task}
                    renderItem={this.renderItem}
                    keyExtractor = {(item, index) => index.toString()}
                />
            </View>
        )
    }
}