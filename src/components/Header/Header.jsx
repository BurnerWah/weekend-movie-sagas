import { Typography } from '@mui/joy'

// I made this a standalone component while trying to add breadcrumbs
// The breadcrumbs did not work, though

export default function Header() {
  return (
    <header>
      <Typography level="h1" sx={{ textAlign: 'center' }}>
        The Movies Saga!
      </Typography>
    </header>
  )
}
