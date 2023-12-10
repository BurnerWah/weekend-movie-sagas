import { Breadcrumbs, Button, Divider, Grid, Typography } from '@mui/joy'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import MovieItem from '../MovieItem/MovieItem'

function MovieList() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()
  const history = useHistory()

  const movies = useSelector((/** @type {State} */ store) => store.movies)

  useEffect(() => {
    dispatch({ type: 'SAGA/FETCH_MOVIES' })
  }, [])

  return (
    <>
      <Breadcrumbs>
        <Typography>Home</Typography>
      </Breadcrumbs>
      <Typography level="h2" sx={{ textAlign: 'center' }}>
        MovieList
      </Typography>
      <Button onClick={() => history.push('/add')}>Add Moie</Button>
      <Divider />
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
    </>
  )
}

export default MovieList
