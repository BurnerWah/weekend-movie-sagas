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

interface MovieDetail extends Movie {
  /** The name of a genre the movie has */
  genre_name: string
}

/** A genre received from the database */
interface Genre {
  /** The genre's id */
  id: number
  /** The genre's name */
  name: string
}

interface Action<T extends string> {
  type: T
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P
}

type SetMoviesAction = ActionWithPayload<'SET_MOVIES', Movie[]>
type SetGenresAction = ActionWithPayload<'SET_GENRES', Genre[]>
type SetMovieDetailsAction = ActionWithPayload<
  'SET_MOVIE_DETAILS',
  MovieDetail[]
>
type ClearMovieDetailsAction = Action<'CLEAR_MOVIE_DETAILS'>
type SetIsLoadingAction = ActionWithPayload<'SET_IS_LOADING', boolean>
type FetchMoviesSaga = Action<'SAGA/FETCH_MOVIES'>
type GetMovieDetailsSaga = ActionWithPayload<
  'SAGA/GET_MOVIE_DETAILS',
  number | string
>
type GetGenresSaga = Action<'SAGA/GET_GENRES'>

type Actions =
  | SetMoviesAction
  | SetGenresAction
  | SetMovieDetailsAction
  | SetIsLoadingAction
  | ClearMovieDetailsAction
  | FetchMoviesSaga
  | GetMovieDetailsSaga
  | GetGenresSaga

interface State {
  movies: Movie[]
  genres: Genre[]
  movieDetails: MovieDetail[]
  isLoading: boolean
}
