import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

export default function DetailsPage() {
  /** @type {Record<string, string | undefined>} */
  const { id } = useParams()

  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch({ type: 'SAGA/GET_MOVIE_DETAILS', payload: id || 0 })
  }, [id])

  const movieDetails = useSelector(
    (/** @type {State} */ store) => store.movieDetails,
  )

  // the movieDetails array *can* be empty, hence the fallback to an empty object
  const { title, poster, description } = movieDetails[0] || {}
  const genres = movieDetails.map((movie) => movie.genre_name)

  return (
    <main data-testid="movieDetails">
      <h1>Details for movie with ID: {id}</h1>
      <h2>{title}</h2>
      <img src={poster} alt={title} />
      <p>{description}</p>
      <p>Genres: {genres.join(', ')}</p>
      <button data-testid="toList" onClick={history.goBack}>
        Back to List
      </button>
    </main>
  )
}
