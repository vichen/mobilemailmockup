import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { MessageList } from './MessageList';
import { mock_messages } from '../mock_data';
import { Header } from './Helpers/Header';
import { Footer } from './Helpers/Footer';

let styles = StyleSheet.create({
  inboxContainer: {
    flex: 1,
    flexDirection: 'column'
  }
});

export class Inbox extends Component {

  /*
  * Group messages by subject line
  * @param {Array} messageArray - list of all messages, sorted from oldest to most recent
  * @returns {Object}
  */
  groupMessages(messageArray) {
    let groupedMessages = {};

    // Iterate backwards so groupedMessages will begin with most recent messages 
    for (let i = messageArray.length - 1; i >= 0; i--) {
      let message = messageArray[i];
      let subjectLine = message.subject;

      if (groupedMessages[subjectLine]) {
        // Current message will be older than any messages that have already been concatenated, 
        // so it is added to the front of the array.
        // Resulting array will be sorted from oldest to most recent
        groupedMessages[subjectLine] = [message].concat(groupedMessages[subjectLine]);
      } else {
        groupedMessages[subjectLine] = [message];
      }
    }
    return groupedMessages;

  }

  /*
  * Finds the most recent message for each subject line
  * @param {Object} groupedMessages - messages grouped by subject line
  * @returns {Array} List of most recent messages
  */
  getmostRecentMessages(groupedMessages) {
    let subjectLines = Object.keys(groupedMessages);
      
    let renderedMessages = subjectLines.map((subjectLine) => {
      let messageArray = groupedMessages[subjectLine];
      let message = messageArray[messageArray.length - 1];

      return message;

    })

    return renderedMessages;
  }

  render() {
    let groupedMessages = this.groupMessages(mock_messages);
    let mostRecentMessages = this.getmostRecentMessages(groupedMessages);

    return (
      <View style={styles.inboxContainer}>
        <Header />
        <MessageList messages={mostRecentMessages}/>
        <Footer />
      </View>
    );
  }
}


