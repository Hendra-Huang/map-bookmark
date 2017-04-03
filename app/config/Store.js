// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import reducers from '../reducers';
import Router from './Router'

const Store = ({ children }) => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Store
