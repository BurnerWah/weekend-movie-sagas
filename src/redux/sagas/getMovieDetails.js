import axios from 'axios'
import { put } from 'redux-saga/effects'

export default function* getMovieDetails({ type, payload: id }) {
  try {
    // Reset the movie details before fetching new ones
    yield put({ type: 'CLEAR_MOVIE_DETAILS' })
    yield put({ type: 'SET_IS_LOADING', payload: true })
    /** @type {import('axios').AxiosResponse<MovieDetail[]>} */
    const movieDetailsResponse = yield axios.get(`/api/movies/${id}`)
    yield put({
      type: 'SET_MOVIE_DETAILS',
      payload: movieDetailsResponse.data,
    })
    yield put({ type: 'SET_IS_LOADING', payload: false })
  } catch (error) {
    console.log('getMovieDetails error:', error)
  }
}
