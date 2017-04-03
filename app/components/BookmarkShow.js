// @flow

import React, { Component } from 'react'
import { Components } from 'expo'

class BookmarkShow extends Component {
  render() {
    return (
      <Components.MapView showsUserLocation loadingEnabled style={{ flex: 1 }} />
    )
  }
}

export default BookmarkShow
