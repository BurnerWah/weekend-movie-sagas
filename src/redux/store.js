import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

// Create sagaMiddleware
const sagas = createSagaMiddleware()

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
 * Used to store the movie details returned from the server
 * @type {import('redux').Reducer<MovieDetail[], SetMovieDetailsAction | ClearMovieDetailsAction>}
 */
const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload
    case 'CLEAR_MOVIE_DETAILS':
      return []
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
const store = createStore(
  combineReducers({
    movies,
    genres,
    movieDetails,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagas, logger),
)

// Pass rootSaga into our sagaMiddleware
sagas.run(rootSaga)

export default store
