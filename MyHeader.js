import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert, TouchableOpacity, Image} from 'react-native';
import db from '../config';
export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <Header
      backgroundColor={"#CB74DA"}
        centerComponent={{
          text: this.props.title,
          style: { color: 'white', fontSize: 25, fontWeight: 'bold'},
        }}/>
    );
  }
}
