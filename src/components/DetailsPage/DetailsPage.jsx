import {
  Breadcrumbs,
  Button,
  Divider,
  Skeleton,
  Stack,
  Typography,
} from '@mui/joy'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import Item from '../Styled/Item'

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

  const isLoading = useSelector((/** @type {State} */ store) => store.isLoading)

  // the movieDetails array *can* be empty, hence the fallback to an empty object
  const { title, poster, description } = movieDetails[0] || {}
  const genres = movieDetails.map((movie) => movie.genre_name)

  return (
    <>
      <Breadcrumbs>
        <Typography>
          <Link to="/">Home</Link>
        </Typography>
        <Typography>{isLoading ? 'Movie Title' : title}</Typography>
      </Breadcrumbs>
      <div data-testid="movieDetails">
        <Typography level="h2" sx={{ textAlign: 'center' }}>
          <Skeleton loading={isLoading}>
            {isLoading ? 'Movie Title' : title}
          </Skeleton>
        </Typography>
        <Divider />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Item>
            <img src={poster} alt={title} />
          </Item>
          <Item>
            <Typography level="body-lg">
              <Skeleton loading={isLoading}>
                {isLoading
                  ? 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'
                  : description}
              </Skeleton>
            </Typography>
            <Typography level="body-md">
              <Skeleton loading={isLoading}>
                {isLoading ? 'Lorem ipsum' : `Genres: ${genres.join(', ')}`}
              </Skeleton>
            </Typography>
          </Item>
        </Stack>
        <Button onClick={history.goBack} data-testid="toList">
          Back to List
        </Button>
      </div>
    </>
  )
}
