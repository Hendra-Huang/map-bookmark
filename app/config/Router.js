// @flow

import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import BookmarkList from '../containers/BookmarkList'
import BookmarkShow from '../containers/BookmarkShow'

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 60 }}>

    <Scene key="main">
      <Scene
        initial
        key="bookmarkList"
        component={BookmarkList}
        title="Bookmarks"
        rightTitle="Add"
        onRight={() => Actions.bookmarkShow()}
      />
      <Scene
        key="bookmarkShow"
        component={BookmarkShow}
        title="Bookmark"
      />
    </Scene>

  </Router>
)

export default RouterComponent
