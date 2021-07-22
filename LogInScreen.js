import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
  Platform,
  ImageBackground,
  Image,
  Modal,
  ScrollView
} from 'react-native';
import * as firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../config';

export default class LoginScreen extends Component {
   constructor() {
    super();
    this.state = {
      emailId: '',
      password: '',
      isModalVisible : 'false',
      firstName : '',
      lastName : '',
      address : '',
      contact : '',
      confirmPassword : '',
      
    };
  }

  showModal = () => {
    return(
      <Modal
      animationType = "fade"
      transparent = {true}
      visible = {this.state.isModalVisible}>
      <View style = {styles.modalContainer}>
      <ScrollView style = {{
        width : '100%'
      }}>
      <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>

      <Text style = {styles.modalTitle}> REGISTRATION </Text>

      <TextInput
        style = {styles.formTextInput}
          placeholder="First Name"
          placeholderTextColor= 'black'
          maxLength = {8}
          onChangeText={(text) => {
            this.setState({
              firstName : text,
            });
          }}
        />

        <TextInput
        style = {styles.formTextInput}
          placeholder="Last Name"
          placeholderTextColor= 'black'
          maxLength = {8}
          onChangeText={(text) => {
            this.setState({
              lastName : text,
            });
          }}
        />

        <TextInput
        style = {styles.formTextInput}
          placeholder="Contact Number"
          placeholderTextColor= 'black'
          keyboardType="numeric"
          maxLength = {10}
          onChangeText={(text) => {
            this.setState({
              contact: text,
            });
          }}
        />

        <TextInput
        style = {styles.formTextInput}
          placeholder="Address"
          placeholderTextColor= 'black'
          multiline = {true}
          onChangeText={(text) => {
            this.setState({
              address: text,
            });
          }}
        />

        <TextInput
        style = {styles.formTextInput}
          placeholder="Email"
          placeholderTextColor= 'black'
          keyboardType="email-address"
          onChangeText={(text) => {
            this.setState({
              emailId: text,
            });
          }}
        />

        <TextInput
        style = {styles.formTextInput}
          placeholder="Password"
          placeholderTextColor= 'black'
          secureTextEntry = {true}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        />

        <TextInput
        style = {styles.formTextInput}
          placeholder="Confirm Password"
          placeholderTextColor= 'black'
          secureTextEntry = {true}
          onChangeText={(text) => {
            this.setState({
              confirmPassword: text,
            });
          }}
        />
        <View>
        <TouchableOpacity
        style = {styles.modalButton}
          onPress={() => {
            this.signUp(this.state.emailId, this.state.password, this.state.confirmPassword);
          }}>
          <Text style = {styles.modalButtonText}

          > REGISTER </Text>
        </TouchableOpacity>
        </View>
        <View>

        <TouchableOpacity
        style = {styles.modalButton}
          onPress={() => 
            this.setState({
              "isModalVisible" : false,
            })
          }>
          <Text style = {styles.modalButtonText}> CANCEL </Text>
        </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
      </ScrollView>
      </View>
      </Modal>
      
    );
  }
  login = async (email, password) => {
    console.log(email);
    console.log(password);
    if (email && password) {
      try {
        console.log(response);
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
          console.log(response);
        if (response) {
          this.props.navigation.navigate('Home');
        }
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User Doesn't Exist");
            break;
          case 'auth/invalid-email':
            alert('Invalid Email-Password');
            break;
        }
      }
    } else {
      alert('Please Enter Email And Password.');
    }
  };

  signUp = (emailId, password, confirmPassword) => {
    if(password!==confirmPassword){
      return alert("Password doesn't Match\n Check Your Password");
    }
    else{
    firebase
      .auth()
      .createUserWithEmailAndPassword(emailId, password)
      .then(() => {
        db.collection('users').add({
          first_name : this.state.firstName,
          last_name : this.state.lastName,
          address : this.state.address,
          mobile_number : this.state.contact,
          email_Id : this.state.emailId,
        })
        return alert('User Added Successfully', '' , [{
          text : 'OK', onPress : () => this.setState({
            isModalVisible : false,
          })
        }])
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <ImageBackground
          source={require('../bg.png')}
          style={styles.backgroundImage}>
          <View>
          {this.showModal()}
            <Text style={styles.titleText}>Electricity Usage</Text>

            <Image
          source={require('../loginIcon.png')}
          style={styles.loginImage}/>

            <TextInput
              style={styles.inputBox}
              placeholder="Email ID"
              placeholderTextColor="white"
              keyboardType="email-address"
              onChangeText={(text) => {
                this.setState({
                  email: text,
                });
              }}
              value={this.state.email}
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              value={this.state.password}
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                this.login(this.state.email, this.state.password);
              }}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                this.setState({
                  isModalVisible : 'true'
                }) 
              }}>
              <Text style={styles.loginButtonText}>SIGN UP</Text>
            </TouchableOpacity>

          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: 1375
  },
  loginImage: {
    flex: 1,
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  inputBox: {
    alignSelf: 'center',
    borderWidth: 2.5,
    width: 250,
    marginTop: 15,
    height: 40,
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 10,
    justifyContent: 'center',
    color: 'white',
  },
  titleText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 5
  },
  loginButton: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderWidth: 2.5,
    width: 90,
    marginTop: 30,
    height: 40,
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 15,
    color: '#8F69E0',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  modalButton: {
    alignSelf: 'center',
    backgroundColor: '#8F69E0',
    borderWidth: 2.5,
    width: 90,
    marginTop: 10,
    height: 40,
    borderColor: 'white',
    borderRadius: 10,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
   modalTitle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 30,
    color: '#8F69E0',
    margin: 50,
    marginBottom : 20
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80,
  },
  formTextInput: {
    width: '75%',
    height: 35,
    alignSelf: 'center',
    borderColor: '#8F69E0',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
  },
});
