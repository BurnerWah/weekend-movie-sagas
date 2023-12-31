const { Router } = require('express')
const pool = require('../modules/pool')

/**
 * @template {import('pg').QueryResultRow} R
 * @typedef {import('pg').QueryResult<R>} QueryResult<R>
 */

const router = Router()

router.get('/', async (req, res) => {
  try {
    /** @type {QueryResult<Movie>} */
    const result = await pool.query(/*sql*/ `
      SELECT *
      FROM "movies"
      ORDER BY "title" ASC;
    `)
    res.send(result.rows)
  } catch (error) {
    console.log('ERROR: Get all movies', error)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      /*sql*/ `
        SELECT
	        m.id AS id,
	        m.title,
	        m.poster,
	        m.description,
	        g.name AS genre_name
        FROM
	        movies AS m
	        INNER JOIN movies_genres AS mg ON m.id = mg.movie_id
	        INNER JOIN genres AS g ON mg.genre_id = g.id
        WHERE
	        m.id = $1;
      `,
      [req.params.id],
    )
    res.send(result.rows)
  } catch (error) {
    console.log('ERROR: Get movie details', error)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    // RETURNING "id" will give us back the id of the created movie
    // FIRST QUERY MAKES MOVIE
    /** @type {QueryResult<{id: number}>} */
    const result = await pool.query(
      /*sql*/ `
        INSERT INTO
          "movies" (
            "title",
            "poster",
            "description"
          )
        VALUES ($1, $2, $3)
        RETURNING "id";
      `,
      [req.body.title, req.body.poster, req.body.description],
    )

    const createdMovieId = result.rows[0].id
    console.log('New Movie Id:', createdMovieId)

    // Now handle the genre reference:
    // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
    await pool.query(
      /*sql*/ `
        INSERT INTO
          "movies_genres" (
            "movie_id",
            "genre_id"
          )
        VALUES ($1, $2);
      `,
      [createdMovieId, req.body.genre_id],
    )

    // Now that both are done, send back success!
    res.sendStatus(201)
  } catch (error) {
    console.log('ERROR: Adding movie', error)
    res.sendStatus(500)
  }
})

module.exports = router
