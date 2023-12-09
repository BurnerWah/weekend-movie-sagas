/**
 * Used to store movies returned from the server
 * @type {import('redux').Reducer<Movie[], SetMoviesAction>}
 * @param {Movie[]} state
 */
export const movies = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return action.payload
    default:
      return state
  }
}
