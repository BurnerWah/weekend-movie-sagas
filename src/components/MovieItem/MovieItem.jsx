import { Link } from 'react-router-dom'

/**
 * @param {Object} props
 * @param {Movie} props.movie
 */
export default function MovieItem({ movie }) {
  return (
    <div data-testid="movieItem">
      <h3>{movie.title}</h3>
      <Link to={`/details/${movie.id}`} data-testid="toDetails">
        <img src={movie.poster} alt={movie.title} />
      </Link>
    </div>
  )
}
