import { CssBaseline, CssVarsProvider, Sheet } from '@mui/joy'
import { Route, HashRouter as Router } from 'react-router-dom'
import AddMovie from '../AddMovie/AddMovie'
import DetailsPage from '../DetailsPage/DetailsPage'
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'

function App() {
  return (
    <CssVarsProvider defaultMode="system">
      <CssBaseline />
      <Sheet sx={{ margin: 2 }}>
        <Header />
        <Router>
          <main>
            <Route path="/" exact>
              <MovieList />
            </Route>
            <Route path="/details/:id">
              <DetailsPage />
            </Route>
            <Route path="/add" exact>
              <AddMovie />
            </Route>
          </main>
        </Router>
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
