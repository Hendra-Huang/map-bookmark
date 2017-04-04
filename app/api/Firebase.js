// @flow

import firebase from 'firebase'

export default FirebaseAPI = {
  pushBookmark(bookmark) {
    return firebase.database().ref('/bookmarks').push(bookmark)
  },

  getBookmarks(callback) {
    return firebase.database().ref('/bookmarks').on('value', callback)
  },

  setBookmark(uid, bookmark) {
    return firebase.database().ref(`/bookmarks/${uid}`).set(bookmark)
  },
}
