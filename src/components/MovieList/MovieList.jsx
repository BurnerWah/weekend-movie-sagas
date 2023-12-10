import { Breadcrumbs, Grid, Typography } from '@mui/joy'
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
      <Breadcrumbs>
        <Typography>Home</Typography>
      </Breadcrumbs>
      <Typography level="h2" sx={{ textAlign: 'center' }}>
        MovieList
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ flexGrow: 1 }}
      >
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Grid>
    </main>
  )
}

export default MovieList
