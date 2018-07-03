import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
}

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Smart Attendance System</Text>
        </View>
        {/* <Text style={{paddingTop: 10,fontSize: 22,color: '#7B98DB',textAlign: 'center'}}>
          CicHub Internship | Group:3
        </Text> */}
        <Text style={{
        //  padding: 0,
        paddingTop: 15,
        // paddingBottom: 20,
         fontSize: 30, 
         color: '#7B98DB',
         textAlign: 'center'}}>
          Sign Up
        </Text>
        <View>
        <TextInput
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          placeholder="Full Name e.g. Firstname Lastname" 
        />
        <TextInput
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          placeholder="Email e.g. someone@sth.com" 
        />
        <TextInput
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          placeholder="Contact Number e.g. 03xx-xxxxxxx" 
        />
        <TextInput
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          placeholder="Roll Number e.g. xxxxxxx" 
        />
        <TextInput
          style={styles.fullName}
          placeholderTextColor="#787A7E" 
          placeholder="Username e.g firstname.lastname" 
        />
        <TextInput
          secureTextEntry={this.state.hidden}
          style={styles.pass}
          placeholderTextColor="#787A7E" 
          placeholder="Password"  
        />
        <TouchableOpacity style={{
            marginTop:50,
            marginLeft: 40,
            marginRight: 40,
        }}  padding='50'>
          <Button
            title='Create Account'
          />
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.SignUpButton}  alighText='center' onPress={() => navigation.navigate('Login')}>
          <Text style={styles.SignUpButtonText} >
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#D3D3D3'
    },
    header: {
      backgroundColor: '#5F9EA0',
      justifyContent: 'center',
      borderTopWidth: 10,
      borderBottomColor: '#6C3483',
    },
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      alignSelf: 'center',
      padding: 2,
      alighText:'center',
      fontSize: 28,
    },
    fullName: {
      alignSelf: 'stretch',
      color: '#3A7EB0',
      padding: 3,
      marginTop: 7,
      fontSize: 12,
      marginLeft: 20,
      marginRight: 20,
    },
    pass: {
    alignSelf: 'stretch',
    color: '#3A7EB0',
    marginTop: 7,
    padding: 3,
    // backgroundColor: 'white',
    // borderTopWidth: 1,
    fontSize: 12,
    marginLeft: 20,
    marginRight: 20,
    },
    SignUpButton: {
      position: 'absolute',
      right: 10,
      bottom:10,
      backgroundColor: '#E91E63',
      width: 45,
      height: 45,
      borderRadius: 50,
      justifyContent: 'center',
      elevation: 8,
    },
    SignUpButtonText:{
      color: 'white',
      alignSelf: 'center',
    },
  }
);