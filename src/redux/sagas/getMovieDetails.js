import axios from 'axios'
import { put } from 'redux-saga/effects'

export default function* getMovieDetails({ type, payload: id }) {
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
