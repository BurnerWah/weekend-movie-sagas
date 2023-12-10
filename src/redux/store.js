import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { genres, isLoading, movieDetails, movies } from './reducers'
import rootSaga from './sagas'

// Create saga Middleware
const sagas = createSagaMiddleware()

// Create one store that all components can use
const store = createStore(
  combineReducers({
    movies,
    genres,
    movieDetails,
    isLoading,
  }),
  applyMiddleware(sagas, logger),
)

// Pass rootSaga into our sagaMiddleware
sagas.run(rootSaga)

export default store
