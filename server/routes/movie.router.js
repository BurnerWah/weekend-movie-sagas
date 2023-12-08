const { Router } = require('express')
const pool = require('../modules/pool')

const router = Router()

router.get('/', async (req, res) => {
  try {
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

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    // RETURNING "id" will give us back the id of the created movie
    // FIRST QUERY MAKES MOVIE
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
