// @flow

import firebase from 'firebase'

export default FirebaseAPI = {
  pushBookmark(bookmark) {
    return firebase.database().ref('/bookmarks').push(bookmark)
  }
}
