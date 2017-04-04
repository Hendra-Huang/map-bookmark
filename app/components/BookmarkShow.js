// @flow

import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { MapView } from 'expo'

class BookmarkShow extends Component {

  handleOnChangeTitle = (title) => {
    this.props.changeTitle(title)
  }

  handleOnPress = (event) => {
    this.props.changeCoordinate(event.nativeEvent.coordinate)
  }

  handleOnSave = () => {
    this.props.save(this.props.marker)
  }

  render() {
    const { marker } = this.props

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            placeholder="title"
            autoCorrect={false}
            style={inputStyle}
            value={marker && marker.title || '' }
            onChangeText={this.handleOnChangeTitle}
          />
          <TouchableOpacity style={buttonStyle} onPress={this.handleOnSave}>
            <Text style={buttonTextStyle}>SAVE</Text>
          </TouchableOpacity>
        </View>
        <MapView
          style={{ flex: 1 }}
          showsUserLocation
          followUserLocation
          loadingEnabled
          onPress={this.handleOnPress}
        >
          { marker.coordinate &&
            <MapView.Marker
              draggable
              coordinate={marker.coordinate}
              title={marker.title || ''}
            />
          }
        </MapView>
      </View>
    )
  }
}

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 40,
    flex: 4,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: '#047e9f',
    fontSize: 16,
  }
}
const { inputStyle, buttonStyle, buttonTextStyle } = styles

export default BookmarkShow
