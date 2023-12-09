/**
 * Used to store the movie details returned from the server
 * @type {import('redux').Reducer<MovieDetail[], SetMovieDetailsAction | ClearMovieDetailsAction>}
 */
export const movieDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIE_DETAILS':
      return action.payload
    case 'CLEAR_MOVIE_DETAILS':
      return []
    default:
      return state
  }
}
