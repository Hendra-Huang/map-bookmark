// @flow

import React from 'react'
import { connect } from 'react-redux'

import { getBookmarks } from '../actions/BookmarkActions'
import FirebaseAPI from '../api/Firebase'
import BookmarkList from '../components/BookmarkList'
import * as bookmarkListSelector from '../reducers/BookmarkListReducer'

const mapStateToProps = (state) => ({
  bookmarks: bookmarkListSelector.getBookmarks(state),
})

const mapDispatchToProps = (dispatch) => ({
  getBookmarks() {
    FirebaseAPI.getBookmarks((snapshot) => {
      dispatch(getBookmarks(snapshot.val()))
    })
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList)
