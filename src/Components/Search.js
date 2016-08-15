import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

let styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    padding: 10,
    backgroundColor: '#BDBEC2'
  },
  searchInput: {
    height: 40,
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 18,
    color: '#111',
    backgroundColor: 'white',
    flex: 10
  },
});

export class Search extends Component{
  constructor(){
    super();
    this.state = {
      searchParam: ''
    }
  }

  handleChange(e){
    this.setState({
      searchParam: e.nativeEvent.text
    })
  }

  render(){
    return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          value={this.state.searchParam}
          onChange={this.handleChange.bind(this)}
          placeholder="Search" />
      </View>
    );
  }
};
