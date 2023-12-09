import { CssBaseline, CssVarsProvider, Sheet, Typography } from '@mui/joy'
import { Route, HashRouter as Router } from 'react-router-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import MovieList from '../MovieList/MovieList'
import './App.css'

function App() {
  return (
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <Sheet>
        <div className="App">
          <header>
            <Typography level="h1" sx={{ textAlign: 'center' }}>
              The Movies Saga!
            </Typography>
          </header>
          <Router>
            <Route path="/" exact>
              <MovieList />
            </Route>
            <Route path="/details/:id">
              <DetailsPage />
            </Route>

            {/* Add Movie page */}
          </Router>
        </div>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
