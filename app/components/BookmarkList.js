// @flow

import React, { Component } from 'react';
import { ListView, ScrollView, ActivityIndicator } from 'react-native';

import ListItem from './ListItem';

class BookmarkList extends Component {

  componentWillMount() {
    this.props.getBookmarks()
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ bookmarks }) {
    let bookmarksWithUid = {}
    for (let uid in bookmarks) {
      if (bookmarks.hasOwnProperty(uid)) {
        let bookmarkWithUid = { ...bookmarks[uid], uid }
        bookmarksWithUid = { ...bookmarksWithUid, [uid]: bookmarkWithUid }
      }
    }

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(bookmarksWithUid)
  }

  renderRow(bookmark) {
    return <ListItem bookmark={bookmark} />;
  }

  render() {
    if (Object.keys(this.props.bookmarks).length === 0) {
      return (
        <ActivityIndicator style={{ flex: 1 }} />
      )
    }

    return (
      <ScrollView style={containerStyle}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </ScrollView>
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
