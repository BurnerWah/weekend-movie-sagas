import axios from 'axios'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchAllMovies() {
  try {
    // Get the movies:
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

// Create the rootSaga generator function
export default function* rootSaga() {
  yield takeEvery('FETCH_MOVIES', fetchAllMovies)
}
