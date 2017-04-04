import { combineReducers } from 'redux'
import BookmarkShowReducer from './BookmarkShowReducer';
import BookmarkListReducer from './BookmarkListReducer';

export default combineReducers({
  bookmarkShow: BookmarkShowReducer,
  bookmarkList: BookmarkListReducer,
})
