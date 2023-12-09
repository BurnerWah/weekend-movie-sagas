import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchAllMovies() {
  try {
    // Get the movies:
    /** @type {import('axios').AxiosResponse<Movie[]>} */
    const moviesResponse = yield axios.get('/api/movies')
    // Set the value of the movies reducer:
    yield put({
      type: 'SET_MOVIES',
      payload: moviesResponse.data,
    })
  } catch (error) {
    console.log('fetchAllMovies error:', error)
  }
}

function* getMovieDetails({ type, payload: id }) {
  try {
    // Reset the movie details before fetching new ones
    yield put({ type: 'CLEAR_MOVIE_DETAILS' })
    /** @type {import('axios').AxiosResponse<MovieDetail[]>} */
    const movieDetailsResponse = yield axios.get(`/api/movies/${id}`)
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: movieDetailsResponse.data,
    })
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}

// Create the rootSaga generator function
export default function* rootSaga() {
  yield takeEvery('SAGA/FETCH_MOVIES', fetchAllMovies)
  yield takeEvery('SAGA/GET_MOVIE_DETAILS', getMovieDetails)
}
