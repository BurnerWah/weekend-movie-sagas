import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware()

/**
 * Used to store movies returned from the server
 * @type {import('redux').Reducer<Movie[], SetMoviesAction>}
 * @param {Movie[]} state
 */
const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload
    default:
      return state
  }
}

/**
 * Used to store the movie genres
 * @type {import('redux').Reducer<Genre[], SetGenresAction>}
 * @param {Genre[]} state
 */
const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload
    default:
      return state
  }
}

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger),
)

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga)

export default storeInstance
