import React, { Component } from 'react';
import {
    Modal, 
    Text, 
    TouchableOpacity, 
    View, 
    Alert,
    Dimensions,
    StyleSheet,
    TextInput,
} from 'react-native';
import moment from 'moment';
const { width, height } = Dimensions.get('window')

export default class AddData extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      name: '',
      task: ''
    }
  }
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
            <View style={styles.container}>
                <View style={styles.modal}>
                  <View style={styles.contain}>
                    <View style={styles.contain2}>
                      <Text style={styles.title}>Add Task</Text>
                      <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='Name' onChangeText={(text) => this.setState({name: text})}/>
                      <TextInput underlineColorAndroid='#4CAF50' style={{width:'80%'}} placeholder='Task' onChangeText={(text) => this.setState({task: text})}/>
                      <View style={styles.btnContain}>
                        <TouchableOpacity 
                          onPress={() => {
                            const {name, task} = this.state;  
                            if (!name.length || !task.length) {
                              alert('You must enter Name and Task');
                              return;
                            }                 
                            this.props.add.onAddUser({id: this.props.add.users.length+1, name, task, time: moment().format('HH.mm')});
                            this.setModalVisible(!this.state.modalVisible)
                          }}
                          >
                          <Text style={[styles.btn,{backgroundColor:'#4fc3f7'}]}>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                          <Text style={[styles.btn,{backgroundColor:'#FFA878'}]}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>     
            </View>
        </Modal>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{fontSize:40}}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex:1, alignItems: 'center',justifyContent: 'center'},
  modal: {
      backgroundColor:'#4fc3f7', 
      borderRadius: 5,
      elevation: 10, 
      height: height*0.4, 
      width: width*0.8,
      alignItems: 'center',
      justifyContent: 'center'
  },
  contain: {backgroundColor:'#fff',elevation:5,borderRadius:5,height:'90%',width:'90%'},
  contain2: {width:'100%',height:'100%',alignItems:'center',justifyContent:'center'},
  title: {fontSize:25,fontWeight:'bold',marginBottom:15,color:'#888'},
  btnContain: {flexDirection:'row',justifyContent:'space-around',width:'100%',marginTop:20},
  btn: {paddingVertical:10,paddingHorizontal:20,color:'#fff',borderRadius:5,fontWeight:'bold'}
})