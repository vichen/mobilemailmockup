import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Separator } from './Helpers/Separator';

let styles = StyleSheet.create({
  rowContainer: {
    padding: 10,
    marginLeft: 25,
    flexDirection: 'column'
  },
  rowHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  messageFrom: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  },
  messageDate: {
    marginLeft: 5,
    color: 'grey',
    fontSize: 18
  },
  messageSubject: {
    fontSize: 18
  },
  messageContent: {
    color: 'grey',
    fontSize: 18
  }
})

export class MessageListItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let message = this.props.message;
    return (
      <View>
        <View style={styles.rowContainer}>

          <View style={styles.rowHeader}>
            <Text 
              numberOfLines={1}
              ellipsizeMode='tail'
              style={styles.messageFrom}>
              {message.from}
            </Text>

            <Text style={styles.messageDate}>
              {message.date}  >
            </Text>
          </View>

          <Text 
            numberOfLines={1}
            ellipsizeMode='tail'
            style={styles.messageSubject}>
            {message.subject}
          </Text>
          <Text 
            numberOfLines={2}
            ellipsizeMode='tail'
            style={styles.messageContent}>
            {message.content}
          </Text>
        </View>
        <Separator />
      </View>
    )
  }
}