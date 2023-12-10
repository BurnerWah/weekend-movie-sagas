import {
  Breadcrumbs,
  Button,
  ButtonGroup,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from '@mui/joy'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'

export default function AddMovie() {
  /** @type {import('redux').Dispatch<Actions>} */
  const dispatch = useDispatch()
  const history = useHistory()

  const [title, setTitle] = useState('')
  const [poster, setPoster] = useState('')
  const [description, setDescription] = useState('')
  const [genre, setGenre] = useState(/** @type {number?} */ (null))

  const genres = useSelector((/** @type {State} */ store) => store.genres)
  const isLoading = useSelector((/** @type {State} */ store) => store.isLoading)

  useEffect(() => {
    dispatch({ type: 'SAGA/GET_GENRES' })
  }, [])

  return (
    <>
      <Breadcrumbs>
        <Typography>
          <Link to="/">Home</Link>
        </Typography>
        <Typography>Add Movie</Typography>
      </Breadcrumbs>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          // Genre must be set, and is the only field which can actually be null
          if (!genre) return
          dispatch({
            type: 'SAGA/SUBMIT_MOVIE',
            payload: { title, poster, description, genre_id: genre },
          })
        }}
      >
        <Typography level="h2" sx={{ textAlign: 'center' }}>
          Add Movie
        </Typography>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          required
        />
        <Textarea
          minRows={3}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Select
          value={genre}
          onChange={(_, v) => setGenre(v)}
          placeholder="Genre..."
          required
        >
          {genres.map(({ id, name }) => (
            <Option key={id} value={id}>
              {name}
            </Option>
          ))}
        </Select>
        <ButtonGroup>
          <Button color="danger" onClick={history.goBack}>
            Cancel
          </Button>
          <Button color="primary" type="submit" loading={isLoading}>
            Save
          </Button>
        </ButtonGroup>
      </form>
    </>
  )
}
