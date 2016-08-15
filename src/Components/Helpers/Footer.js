import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

let styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4E4E4',
    borderTopColor: '#DBDDDE',
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
});

export class Footer extends Component{
  render(){
    return (
      <View style={styles.footer}>
        <Text>
          Updated Just Now
        </Text>
      </View>
    );
  }
};
