// @flow

import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import BookmarkShow from '../components/BookmarkShow'
import { changeBookmarkTitle, changeBookmarkCoordinate, loadBookmark, resetBookmark } from '../actions/BookmarkActions'
import * as bookmarkShowSelector from '../reducers/BookmarkShowReducer'
import FirebaseAPI from '../api/Firebase'

const mapStateToProps = (state) => ({
  marker: bookmarkShowSelector.getMarker(state),
})

const mapDispatchToProps = (dispatch) => ({
  changeTitle(title) {
    dispatch(changeBookmarkTitle(title))
  },

  changeCoordinate(coordinate) {
    dispatch(changeBookmarkCoordinate(coordinate))
  },

  loadBookmark(bookmark) {
    dispatch(loadBookmark(bookmark))
  },

  resetMarker() {
    dispatch(resetBookmark())
  },

  save(marker) {
    FirebaseAPI.pushBookmark(marker)
      .then(() => {
        Actions.bookmarkList({ type: 'reset' })
      })
  },

  update(uid, marker) {
    FirebaseAPI.setBookmark(uid, marker)
      .then(() => {
        Actions.bookmarkList({ type: 'reset' })
      })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkShow)
