import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Modal,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../config';
import firebase from 'firebase';

export default class HomeScreen extends Component {
    render() {
    return (
      <SafeAreaProvider>
        <View>
          <SafeAreaView style={styles.androidArea} />
          <MyHeader title="Home" />
          <ImageBackground
            source={require('../bg.png')}
            style={styles.backgroundImage}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {this.props.navigation.navigate('Usage')}}>
              <Text style={styles.buttonText1}>Usage</Text>
              <Text style={styles.buttonText2}>Try it now-----></Text>
              <Image
                source={require('../bulbIcon.png')}
                style={styles.loginImage}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>  {this.props.navigation.navigate('Save')}} >
              <Text style={styles.buttonText1}>Save</Text>
              <Text style={styles.buttonText3}>Electricity</Text>
              <Text style={styles.buttonText2}>Save Energy-----></Text>
               <Image
               source={require('../save.png')}
                style={styles.loginImage2}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: 520,
  },
  androidArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#D5BADB',
    borderWidth: 2.5,
    width: 210,
    marginTop: 50,
    height: 120,
    borderColor: 'white',
    borderRadius: 20,
    fontSize: 20,
  },
  buttonText1: {
    fontSize: 25,
    color: '#301934',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop:15,
  },
  buttonText2: {
    fontSize: 15,
    color: '#301934',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  buttonText3: {
    fontSize: 25,
    color: '#301934',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  loginImage: {
    flex: 1,
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginLeft: 150,
    marginTop: -100,
  },
  loginImage2: {
    flex: 1,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginLeft: 170,
    marginTop: -100,
  },
});
