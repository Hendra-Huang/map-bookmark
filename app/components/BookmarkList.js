// @flow

import React, { Component } from 'react';
import { ListView, ScrollView } from 'react-native';

import ListItem from './ListItem';

class BookmarkList extends Component {

  componentWillMount() {
    //this.props.bookmarksFetch();
    //this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    //this.createDataSource(nextProps);
  }

  //createDataSource({ bookmarks }) {
    //const ds = new ListView.DataSource({
      //rowHasChanged: (r1, r2) => r1 !== r2
    //});

    //this.dataSource = ds.cloneWithRows(bookmarks);
  //}

  //renderRow(bookmark) {
    //return <ListItem bookmark={bookmark} />;
  //}

  render() {
    return (
      <ScrollView style={containerStyle}>
        <ListItem />
      </ScrollView>
      //<ListView
        //enableEmptySections
        //dataSource={this.dataSource}
        //renderRow={this.renderRow}
      ///>
    );
  }
}

const styles = {
  containerStyle: {
    paddingVertical: 5,
  },
}
const { containerStyle } = styles

export default BookmarkList
