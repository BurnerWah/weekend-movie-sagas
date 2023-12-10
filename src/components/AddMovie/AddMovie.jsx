import { Breadcrumbs, Typography } from '@mui/joy'
import { Link } from 'react-router-dom'

export default function AddMovie() {
  return (
    <Breadcrumbs>
      <Typography>
        <Link to="/">Home</Link>
      </Typography>
      <Typography>Add Movie</Typography>
    </Breadcrumbs>
  )
}
