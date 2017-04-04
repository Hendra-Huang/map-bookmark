// @flow

import {
  BOOKMARK_FETCHED
} from '../actions/types';

const INITIAL_STATE = {
  bookmarks: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKMARK_FETCHED:
      return { ...state, bookmarks: action.bookmarks }

    default:
      return state;
  }
}

export const getBookmarks = (state) => state.bookmarkList.bookmarks
