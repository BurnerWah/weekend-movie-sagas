import { CssBaseline, CssVarsProvider, Sheet } from '@mui/joy'
import { Route, HashRouter as Router } from 'react-router-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import './App.css'

function App() {
  return (
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <Sheet>
        <div className="App">
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
        </div>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
