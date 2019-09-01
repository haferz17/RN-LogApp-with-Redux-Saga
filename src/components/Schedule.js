import React, { Component } from 'react';
import {  
    View,
    Text,
    FlatList,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window')

export default class UserList extends Component {
    constructor(props){
        super(props);
    }
    renderItem = ({item,index}) => {
        const { time } = this.props
        let prevTime = moment(time[index],'HH.mm').add(-1,'minutes').format('HH.mm')
        let prevTime2 = moment(time[index],'HH.mm').add(-1,'minutes').format(' - HH.mm')
        return (
            <View style={[styles.task,{backgroundColor:index%2==0?'#e1f5fe':'#FBEEEF',marginBottom:index==this.props.task.length-1?40:15,borderRightColor:index%2==0?'#03a9f4':'#FFA878'}]}>
                <View style={{height:'100%',backgroundColor:index%2==0?'#03a9f4':'#FFA878',width:'2%',borderRadius:5}}/>
                <View style={styles.taskBody}>
                    <View style={{width:'80%'}}>
                        <Text style={{color:'#455a64',fontSize:15,fontWeight:'bold'}}>{item.task}</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:index%2==0?'#4fc3f7':'#ef9a9a',fontSize:13,fontWeight:'bold'}}>
                                {item.time}
                                {
                                    time[index]==undefined ? null:item.time==time[index] ? null:item.time==prevTime ? null:prevTime2           
                                }
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image style={{right:10,width:26,height:27}} source={require('../assets/menu.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render(){
        const { name } = this.props.task[0]
        const { task } = this.props
        return(
            <View style={{flex:1}}>
                <View style={{marginTop:40,marginLeft:20,marginBottom:10}}>
                    <Text numberOfLines={1} style={{color:'#888',fontSize:20,fontWeight:'bold'}}>{name} activities</Text>
                </View>
                <FlatList
                    data={task}
                    renderItem={this.renderItem}
                    keyExtractor = {(item, index) => index.toString()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    task: {
        padding:10,
        width:width*0.85,
        alignSelf:'center',
        flexDirection:'row',
        borderRadius:10,
        borderRightWidth:5
    },
    taskBody: {
        justifyContent:'space-around',
        flexDirection:'row',
        width:'100%',
        alignItems:'center'
    }
})