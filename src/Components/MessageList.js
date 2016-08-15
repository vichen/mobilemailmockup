import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ListView,
  ScrollView
} from 'react-native';
import { MessageListItem } from './MessageListItem';
import { Search } from './Search';

let styles = StyleSheet.create({
  listContainer: {
    flex: 1
  }
})

export class MessageList extends Component {
  constructor(props){
    super(props);
    this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
    this.state = {
      dataSource: this.ds.cloneWithRows(props.messages)
    }
  }

  renderRow(rowData){
    return (
      <MessageListItem message={rowData}/>
    )
  }

  render() {

    return (
      <View style={styles.listContainer}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderHeader={() => <Search />}
        renderScrollComponent={props => <ScrollView {...props} />}
        />
      </View>
    );
  }
}


