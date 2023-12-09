/**
 * Used to store the movie genres
 * @type {import('redux').Reducer<Genre[], SetGenresAction>}
 * @param {Genre[]} state
 */
export const genres = (state = [], action) => {
  switch (action.type) {
    case 'SET_GENRES':
      return action.payload
    default:
      return state
  }
}
