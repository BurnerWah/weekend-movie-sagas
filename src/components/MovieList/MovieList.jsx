import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
          <div data-testid="movieItem" key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
          </div>
        ))}
      </section>
    </main>
  )
}

export default MovieList
