import { Route, HashRouter as Router } from 'react-router-dom'
import DetailsPage from '../DetailsPage/DetailsPage'
import MovieList from '../MovieList/MovieList'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
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
  )
}

export default App
