/**
 * @param {Object} props
 * @param {Movie} props.movie
 */
export default function MovieItem({ movie }) {
  return (
    <div data-testid="movieItem">
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={movie.title} />
    </div>
  )
}
