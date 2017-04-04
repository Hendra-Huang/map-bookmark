// @flow

import {
  BOOKMARK_TITLE_CHANGED,
  BOOKMARK_COORDINATE_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  marker: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOKMARK_TITLE_CHANGED:
      return { ...state, marker: { coordinate: state.marker.coordinate, title: action.title } }

    case BOOKMARK_COORDINATE_CHANGED:
      return { ...state, marker: { coordinate: action.coordinate, title: state.marker.title } }

    default:
      return state;
  }
}

export const getMarker = (state) => state.bookmarkShow.marker
