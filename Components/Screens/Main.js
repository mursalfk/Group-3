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

export default class Main extends Component {
  static navigationOptions = {
    title: 'Main'
  };
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
        {/* <Text style={{paddingTop: 10, fontSize: 22,color: '#7B98DB',textAlign: 'center'}}>
          CicHub Internship | Group:3
        </Text> */}
        <Text style={{
        //  padding: 0,
          paddingTop: 50,
         // paddingBottom: 20,
          fontSize: 30, 
          color: '#7B98DB',
          textAlign: 'center'}}>
          Log in
        </Text>
        <View style={{marginTop:100,}}>
          <TextInput
            style={styles.user}
            placeholderTextColor="#787A7E" 
            placeholder="Username" 
          />
          <TextInput
            secureTextEntry={this.state.hidden}
            style={styles.pass}
            placeholderTextColor="#787A7E" 
            placeholder="Password"  
          />
          <TouchableOpacity style={styles.loginButton} padding='10'>
            <Button 
              onPress={() => navigation.navigate('User')}
              title='Log In'
            />
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.SignUpButtonText}>
            SIGN UP
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
    user: {
      alignSelf: 'stretch',
      color: '#3A7EB0',
      padding: 3,
     // backgroundColor: 'white',
    //   borderTopWidth: 1,
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
      width: 90,
      height: 90,
      borderRadius: 50,
      justifyContent: 'center',
      elevation: 8,
      fontSize: 24,
    },
    loginButton:{
      marginTop:25,
      marginLeft:40,
      marginRight: 40,
      borderColor: '#B8BBC0',
      borderWidth: 5,
      fontSize: 30,
      },
    SignUpButtonText:{
      color: 'white',
      alignSelf: 'center',
    },
  }
);