import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Typography,
} from '@mui/joy'
import { Link } from 'react-router-dom'

/**
 * @param {Object} props
 * @param {Movie} props.movie
 */
export default function MovieItem({ movie }) {
  return (
    <div data-testid="movieItem">
      <Link to={`/details/${movie.id}`} data-testid="toDetails">
        <Card sx={{ width: 320, height: 540 }}>
          <CardOverflow>
            <AspectRatio objectFit="contain" ratio="0.7">
              <img src={movie.poster} alt={movie.title} loading="lazy" />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="title-lg">{movie.title}</Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  )
}
