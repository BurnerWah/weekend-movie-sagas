import { CssVarsProvider, Sheet, Typography } from '@mui/joy'
import { Route, HashRouter as Router } from 'react-router-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import MovieList from '../MovieList/MovieList'
import './App.css'

function App() {
  return (
    <CssVarsProvider defaultMode="system">
      <Sheet>
        <div className="App">
          <Typography variant="h1">The Movies Saga!</Typography>
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
