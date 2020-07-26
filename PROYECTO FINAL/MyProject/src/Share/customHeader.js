import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class customHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> customHeader </Text>
        <Image
          style={{width: 50, height: 50}}
           
        />
      </View>
    );
  }
}
