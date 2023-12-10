import { CssBaseline, CssVarsProvider, Sheet } from '@mui/joy'
import { Route, HashRouter as Router } from 'react-router-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'

function App() {
  return (
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <Sheet>
        <Header />
        <Router>
          <Route path="/" exact>
            <MovieList />
          </Route>
          <Route path="/details/:id">
            <DetailsPage />
          </Route>

          {/* Add Movie page */}
        </Router>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
