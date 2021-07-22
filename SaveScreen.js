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

export default class SaveScreen extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <View>
          <SafeAreaView style={styles.androidArea} />
          <MyHeader title="Save Electricity" />
          <ImageBackground
            source={require('../bg.png')}
            style={styles.backgroundImage}>
            <Text style={styles.text}>Tips To Save Electricity </Text>
             <Image
              source={require('../save_img.png')}
              style={{
                flex: 1,
                width: 130,
                height:130,
                alignSelf: 'center',
                marginTop: 5,
                marginBottom: 5
              }}
            />
            <Text style={styles.text2}>
              1. Turn off lights when not required.
            </Text>
            <Text style={styles.text2}>2. Do laundry efficiently.</Text>
            <Text style={styles.text2}>3. Unplug battery chargers. </Text>
            <Text style={styles.text2}>
              4. Use energy-efficient light bulbs.
            </Text>
            <Text style={[styles.text2, { marginLeft: 40 }]}>
              like LED or CFL.
            </Text>
            <Text style={styles.text2}>
              5. Invest in energy-efficient 
            </Text>
            <Text style={[styles.text2, { marginLeft: 40 }]}>
              appliances for the home.
            </Text>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home');
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
    fontSize: 25,
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
