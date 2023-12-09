import { useHistory, useParams } from 'react-router-dom'

export default function DetailsPage() {
  /** @type {Record<string, string | undefined>} */
  const { id } = useParams()

  const history = useHistory()

  return (
    <main data-testid="movieDetails">
      <h1>Details for movie with ID: {id}</h1>
      <button data-testid="toList" onClick={history.goBack}>
        Back to List
      </button>
    </main>
  )
}
