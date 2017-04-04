import { combineReducers } from 'redux'
import BookmarkShowReducer from './BookmarkShowReducer';

export default combineReducers({
  bookmarkShow: BookmarkShowReducer,
})
