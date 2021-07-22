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
  ScrollView,
  Image,
  Platform,
  StatusBar,
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class ShowScreen extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <SafeAreaView style={styles.androidArea} />
          <MyHeader title="Analysis" />
          <ImageBackground
            source={require('../bg.png')}
            style={styles.backgroundImage}>
            <Text style={styles.text}>Approximate Consumption </Text>

            <Text style={styles.text}>
              {this.props.navigation.getParam('c') + ' ' + 'Rs Only'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Usage');
              }}>
              <Image
                source={require('../back.png')}
                style={{ width: 50, height: 50, alignSelf: 'center' }}
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
    height: 620,
  },
  androidArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  text: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  text2: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 5,
  },
});
