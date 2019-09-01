import React, { Component } from 'react';
import {  
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    ScrollView
} from 'react-native';
import moment from 'moment';
import Schedule from './Schedule';
import AddData from './AddData';

export default class UserList extends Component {
    constructor(props){
        super(props);
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
        return(
            <View style={{flex:1,backgroundColor:'#03a9f4'}}>
                <StatusBar backgroundColor="#03a9f4"/>
                <View style={{flex:1,backgroundColor:'#03a9f4',bottom:-40,alignItems:'center'}}>
                    {
                    isClicked? 
                    <View style={styles.headS}>
                        <TouchableOpacity onPress={()=>this.handler()}>
                            <Text style={styles.date}>{"< Back"}</Text>
                        </TouchableOpacity>
                        <Text style={styles.date}>{moment().format('dddd, DD MMMM YYYY')}</Text>
                    </View>
                    :
                    <Text style={styles.date}>{moment().format('dddd, DD MMMM YYYY')}</Text>
                    }
                    <Text style={[styles.title,{marginTop:isClicked?0:30}]}>{isClicked?"Hi, See your activities":"Hi, What are you"}</Text>
                    <Text style={styles.title}>{isClicked?"today here":"doing today ?"}</Text>
                </View>
                <View style={styles.body}>    
                {
                    isClicked ? 
                    <Schedule task={item} time={itvTime}/> : 
                    merge.length==0 ? 
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Image style={{width:'55%',height:'50%'}} source={require('../assets/medical-report.png')}/>
                    </View> : 
                    (
                    <View style={{flex:1}}>
                        <View style={{marginTop:40,marginLeft:20,marginBottom:10}}>
                        <Text style={{color:'#888',fontSize:20,fontWeight:'bold'}}>{isClicked?"Log Activity":"List User"}</Text>
                    </View>
                    <ScrollView>
                    {
                        merge.map((item,index)=>{
                            return (
                                <TouchableOpacity key={index} onPress={()=>this.handleClick(item)}>
                                    <View style={[styles.user,{marginBottom:index==merge.length-1?50:15}]}>
                                        <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
                                            <View style={styles.circle}>
                                                <Text style={{color:'#FFA878',fontSize:20,fontWeight:'bold'}}>{item[0]}</Text>
                                            </View>
                                        </View>
                                        <View style={{flex:5,justifyContent:'space-around',paddingVertical:13}}>
                                            <Text numberOfLines={1} style={{color:'#888',fontSize:20,fontWeight:'bold'}}>{item}</Text>
                                            <Text numberOfLines={1} style={{color:'#bbb',fontSize:13,fontWeight:'bold'}}>Tap to see {item} activity</Text>
                                        </View>
                                        <View style={{flex:1,justifyContent:'center'}}> 
                                            <Image style={{marginLeft:5,width:20,height:20}} source={require('../assets/right-arrow.png')}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    </ScrollView>
                    </View>
                    )
                }
                {
                    isClicked == false ? 
                    <TouchableOpacity style={styles.add}>
                        <AddData add={this.props}/>
                    </TouchableOpacity> : null
                }
                </View>
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
    headS: {
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        alignItems:'center',
        marginBottom:30
    },
    date: {
        color:'#fff',
        fontSize:15,
        padding:9,
        fontWeight:'bold',
        backgroundColor:'#81d4fa',
        borderRadius:10
    },
    title: {
        color:'#fff',
        fontSize:27,
        fontWeight:'bold'
    },
    body: {
        flex:2,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:'#f6f6f6'
    },
    user: {
        height:80,
        width:'85%',
        flexDirection:'row',
        backgroundColor:'#fff',
        alignSelf:'center',
        borderRadius:10
    },
    circle: {
        height:'65%',
        width:'65%',
        borderRadius:35,
        backgroundColor:'#FBEEEF',
        alignItems:'center',
        justifyContent:'center'
    }
})