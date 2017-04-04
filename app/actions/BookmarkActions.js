// @flow

import {
  BOOKMARK_TITLE_CHANGED,
  BOOKMARK_COORDINATE_CHANGED,
  BOOKMARK_FETCHED,
  BOOKMARK_LOADED,
  BOOKMARK_RESET,
} from './types.js'

export const changeBookmarkTitle = (title) => ({
  type: BOOKMARK_TITLE_CHANGED,
  title,
})

export const changeBookmarkCoordinate = (coordinate) => ({
  type: BOOKMARK_COORDINATE_CHANGED,
  coordinate,
})

export const getBookmarks = (bookmarks) => ({
  type: BOOKMARK_FETCHED,
  bookmarks,
})

export const loadBookmark = (bookmark) => ({
  type: BOOKMARK_LOADED,
  bookmark,
})

export const resetBookmark = () => ({
  type: BOOKMARK_RESET,
})
