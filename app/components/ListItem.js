// @flow

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class ListItem extends Component {
  render() {
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>List</Text>
      </View>
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
