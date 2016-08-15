import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

let styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  },
});

export class Separator extends Component{
  render(){
    return (
      <View style={styles.separator} />
    );
  }
};
