import React, { Component } from 'react';
import {  
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import Schedule from './Schedule';
import AddData from './AddData';

export default class UserList extends Component {
    constructor(props){
        super(props);
        this.handler=this.handler.bind(this)
        this.state = {
            item: [],
            isClicked: false
        }
    }
    handler(){
        this.setState({isClicked: false})
    }
    componentDidMount(){
        this.props.onFetchUsers()
    }
    handleClick(item){
        const { users } = this.props
        // Get Data from User Clicked
        let taskData = []
        for(let a=0;a<users.length;a++){
            if(item==users[a].name){
                taskData.push(users[a])
            }
        }
        this.setState({item:taskData,isClicked:true})
    }
    render(){
        const { users } = this.props
        const { item, isClicked } = this.state
        const data = []
        const itvTime = []
        // Group by Name
        if(users!==undefined){
            for(let x=0;x<users.length;x++){
                data.push(users[x].name)
            }
        }
        const merge = [...new Set(data)]
        // Get Time by Name
        if(item!==undefined){
            for(let x=1;x<item.length;x++){
                itvTime.push(item[x].time)
            }
        }
        const mergeTime = [...new Set(itvTime)]
        return(
            <View style={{flex:1}}>
                {
                isClicked ? 
                    <Schedule task={item} action={this.handler} time={mergeTime}/> : 
                    merge.map((item,index)=>{
                        return (
                            <View key={index} style={{height:80,width:'100%',backgroundColor:'cyan'}}>
                                <Text>{item}</Text>
                                <Button title="Schedule" onPress={()=>this.handleClick(item)}/>
                            </View>
                        )
                    })
                }
                {
                isClicked == false ? 
                    <TouchableOpacity style={styles.add}>
                        <AddData add={this.props}/>
                    </TouchableOpacity> : null
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    add: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '6%',
        right: '6%',
        backgroundColor: '#fff',
        width: 65,
        height: 65,
        borderRadius: 50,
        elevation: 10,
        zIndex: 2
    },
})