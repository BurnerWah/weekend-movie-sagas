import axios from 'axios'
import { put } from 'redux-saga/effects'

export default function* fetchAllMovies() {
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
