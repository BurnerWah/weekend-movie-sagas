import axios from 'axios'
import { put } from 'redux-saga/effects'

export default function* getGenres() {
  try {
    /** @type {import('axios').AxiosResponse<Genre[]>} */
    const res = yield axios.get('/api/genres')
    yield put({ type: 'SET_GENRES', payload: res.data })
  } catch (error) {
    console.log('getGenres error:', error)
  }
}
