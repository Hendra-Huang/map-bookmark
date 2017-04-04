// @flow

import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  handleOnItemPress = () => {
    const { bookmark } = this.props
    Actions.bookmarkShow({ bookmark })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handleOnItemPress}>
        <View style={viewStyle}>
          <Text style={textStyle}>{this.props.bookmark.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#EEE',
  },
  textStyle: {
    fontSize: 16,
  },
})
const { viewStyle, textStyle } = styles


export default ListItem
