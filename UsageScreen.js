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

export default class UsageScreen extends Component {
  constructor() {
    super();
    this.state = {
      fan: 0,
      ac: 0,
      led: 0,
      tubelight: 0,
      cooler: 0,
      tv: 0,
      computer: 0,
      laptopCharging: 0,
      mobileCharging: 0,
      fridge: 0,
      washing: 0,
      kitchen: 0,
      charges : 0.0
    };
  }

  calculateBill = () => {
    var fan = 0.08 * this.state.fan;
    var ac = 0.9 * this.state.ac;
    var kitchen = 1.3 * this.state.kitchen;
    var led = 0.25 * this.state.fan;
    var tubelight = 0.055 * this.state.tubelight;
    var cooler = 0.3 * this.state.cooler;
    var computer = 0.15 * this.state.computer;
    var tv = 0.12 * this.state.tv;
    var laptop = 0.15 * this.state.laptopCharging;
    var mobile = 0.005 * this.state.mobileCharging;
    var fridge = 0.25 * this.state.fridge;
    var washing = 1.5 * this.state.washing;

    var bill =
      fan +
      ac +
      kitchen +
      led +
      tubelight +
      cooler +
      computer +
      tv +
      laptop +
      mobile +
      fridge +
      washing;
    var charges = 0;
    var monthlyBill = 30 * bill;

    if (monthlyBill > 0 && monthlyBill <= 100) {
      charges = 0;
    } else if (monthlyBill > 0 && monthlyBill <= 200) {
      monthlyBill = monthlyBill - 100;
      charges = monthlyBill * 1.5;
    } else if (monthlyBill > 200 && monthlyBill <= 500) {
      monthlyBill = monthlyBill - 200;
      charges = monthlyBill * 3 + 200;
    } else if (monthlyBill > 500) {
      monthlyBill = monthlyBill - 500;
      charges = monthlyBill * 6.6 + 200 * 3.5 + 200 * 4.6;
    }
    return charges;
  };

  render() {
    return (
      <SafeAreaProvider>
        <View>
          <SafeAreaView style={styles.androidArea} />
          <MyHeader title="Calculate" />
          <ImageBackground
            source={require('../bg.png')}
            style={styles.backgroundImage}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                marginTop: 5,
              }}>
              NOTE : Please enter the values in hours/day.
            </Text>

            <View style={[styles.inputView, { marginTop: 20 }]}>
              <Text style={styles.inputText}>Fan : </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    fan: text,
                  });
                }}
              />
            </View>

            <View
              style={[styles.inputView, { marginLeft: 185, marginTop: -40 }]}>
              <Text style={styles.inputText}>AC: </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    ac: text,
                  });
                }}
              />
            </View>

            <View style={[styles.inputView, { marginTop: 20, marginLeft: 25 }]}>
              <Text style={styles.inputText}>Kitchen : </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    kitchen: text,
                  });
                }}
              />
            </View>

            <View
              style={[styles.inputView, { marginLeft: 180, marginTop: -40 }]}>
              <Text style={styles.inputText}>LED: </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    led: text,
                  });
                }}
              />
            </View>

            <View style={[styles.inputView, { marginTop: 20, marginLeft: 14 }]}>
              <Text style={styles.inputText}>Tubelight : </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    fan: text,
                  });
                }}
              />
            </View>

            <View
              style={[styles.inputView, { marginLeft: 163, marginTop: -40 }]}>
              <Text style={styles.inputText}>Cooler: </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    cooler: text,
                  });
                }}
              />
            </View>

            <View style={[styles.inputView, { marginTop: 20, marginLeft: 13 }]}>
              <Text style={styles.inputText}>Computer : </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    computer: text,
                  });
                }}
              />
            </View>

            <View
              style={[styles.inputView, { marginLeft: 192, marginTop: -40 }]}>
              <Text style={styles.inputText}>TV: </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    tv: text,
                  });
                }}
              />
            </View>

            <View style={[styles.inputView, { marginTop: 20, marginLeft: 35 }]}>
              <Text style={styles.inputText}>Laptop : </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    laptopCharging: text,
                  });
                }}
              />
            </View>

            <View
              style={[styles.inputView, { marginLeft: 163, marginTop: -40 }]}>
              <Text style={styles.inputText}>Mobile: </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    mobileCharging: text,
                  });
                }}
              />
            </View>

            <View style={[styles.inputView, { marginTop: 20, marginLeft: 40 }]}>
              <Text style={styles.inputText}>Fridge : </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    fridge: text,
                  });
                }}
              />
            </View>

            <View
              style={[styles.inputView, { marginLeft: 150, marginTop: -40 }]}>
              <Text style={styles.inputText}>Washing: </Text>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    washing: text,
                  });
                }}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                var charges = this.calculateBill();
                charges = Math.round(charges);
                this.props.navigation.navigate('Show',{c:charges})
              }}>
              <Text style={styles.buttonText1}>Calculate</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home');
              }}>
              <Image
                source={require('../back.png')}
                style={{ width: 50, height: 50, alignSelf: 'center', marginTop : 10 }}
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
  button: {
    alignSelf: 'center',
    backgroundColor: '#D5BADB',
    borderWidth: 2.5,
    width: 150,
    marginTop: 50,
    height: 50,
    borderColor: 'white',
    borderRadius: 20,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText1: {
    fontSize: 20,
    color: '#301934',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputView: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  inputText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    marginTop: 10,
  },
  inputBox: {
    width: 40,
    height: 40,
    borderColor: '#8F69E0',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
  },
});
