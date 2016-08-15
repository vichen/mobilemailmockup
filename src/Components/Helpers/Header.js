import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

let styles = StyleSheet.create({
  header: {
    height: 70,
    backgroundColor: '#E4E4E4',
    paddingTop: 30,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom:15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#DBDDDE',
    borderBottomWidth: 2,
    borderStyle: 'solid'
  },
  leftArrow: {
    color: '#007AFF',
    fontSize: 20,
    marginRight: 4
  },
  mailboxesLink: {
    color: '#007AFF',
    fontSize: 20
  },
  editLink: {
    color: '#007AFF',
    fontSize: 20,
    alignItems: 'flex-end',
    flex: 1,
    textAlign: 'right'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  grouping: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  }
});

export class Header extends Component{
  render(){
    return (
      <View style={styles.header}>
        <View style={styles.grouping}>
          <Text style={styles.leftArrow}>
            {String.fromCharCode(60)}
          </Text>
          <Text style={styles.mailboxesLink}>
            Mailboxes
          </Text>
        </View>
        <Text style={styles.headerText}>
          All Inboxes
        </Text>
        <Text style={styles.editLink}>
          Edit
        </Text>
      </View>
    );
  }
};
