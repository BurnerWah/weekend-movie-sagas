import axios from 'axios'
import { put } from 'redux-saga/effects'

/**
 *
 * @param {SubmitMovieSaga} action
 */
export default function* submitMovie({ type, payload: movie }) {
  try {
    yield axios.post('/api/movies', movie)
    yield put({ type: 'SAGA/FETCH_MOVIES' })
  } catch (error) {
    console.log('submitMovie error:', error)
  }
}
