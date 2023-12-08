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

router.post('/', (req, res) => {
  console.log(req.body)
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
    INSERT INTO "movies" 
      ("title", "poster", "description")
      VALUES
      ($1, $2, $3)
      RETURNING "id";
  `
  const insertMovieValues = [
    req.body.title,
    req.body.poster,
    req.body.description,
  ]
  // FIRST QUERY MAKES MOVIE
  pool
    .query(insertMovieQuery, insertMovieValues)
    .then((result) => {
      // ID IS HERE!
      console.log('New Movie Id:', result.rows[0].id)
      const createdMovieId = result.rows[0].id

      // Now handle the genre reference:
      const insertMovieGenreQuery = `
        INSERT INTO "movies_genres" 
          ("movie_id", "genre_id")
          VALUES
          ($1, $2);
      `
      const insertMovieGenreValues = [createdMovieId, req.body.genre_id]
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool
        .query(insertMovieGenreQuery, insertMovieGenreValues)
        .then((result) => {
          //Now that both are done, send back success!
          res.sendStatus(201)
        })
        .catch((err) => {
          // catch for second query
          console.log(err)
          res.sendStatus(500)
        })
    })
    .catch((err) => {
      // 👈 Catch for first query
      console.log(err)
      res.sendStatus(500)
    })
})

module.exports = router
