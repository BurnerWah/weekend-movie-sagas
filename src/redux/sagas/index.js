import { takeEvery } from 'redux-saga/effects'
import fetchAllMovies from './fetchAllMovies'
import getMovieDetails from './getMovieDetails'

// Create the rootSaga generator function
export default function* rootSaga() {
  yield takeEvery('SAGA/FETCH_MOVIES', fetchAllMovies)
  yield takeEvery('SAGA/GET_MOVIE_DETAILS', getMovieDetails)
}
