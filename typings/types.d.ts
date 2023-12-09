/** A movie received from the database */
interface Movie {
  /** The movie's id */
  id: number
  /** The movie's title */
  title: string
  /** The path of the movie's poster */
  poster: string
  /** The movie's description */
  description: string
}

/** Not implemented yet */
type Genre = unknown

interface Action<T extends string> {
  type: T
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

type SetMoviesAction = ActionWithPayload<'SET_MOVIES', Movie[]>
type SetGenresAction = ActionWithPayload<'SET_GENRES', Genre[]>
type FetchMoviesSaga = Action<'SAGA/FETCH_MOVIES'>

type Actions = SetMoviesAction | SetGenresAction | FetchMoviesSaga

interface State {
  movies: Movie[]
  genres: Genre[]
}
