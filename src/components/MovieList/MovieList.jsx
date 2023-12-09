import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'
import './MovieList.css'

function MovieList() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()

  const movies = useSelector((/** @type {State} */ store) => store.movies)

  useEffect(() => {
    dispatch({ type: 'SAGA/FETCH_MOVIES' })
  }, [])

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  )
}

export default MovieList
