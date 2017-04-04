// @flow

import { Actions } from 'react-native-router-flux'

import {
  BOOKMARK_TITLE_CHANGED,
  BOOKMARK_COORDINATE_CHANGED,
} from './types.js'

export const changeBookmarkTitle = (title) => ({
  type: BOOKMARK_TITLE_CHANGED,
  title,
})

export const changeBookmarkCoordinate = (coordinate) => ({
  type: BOOKMARK_COORDINATE_CHANGED,
  coordinate,
})
