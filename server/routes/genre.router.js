const { Router } = require('express')
const pool = require('../modules/pool')

const router = Router()

router.get('/', async (req, res) => {
  try {
    /** @type {import('pg').QueryResult<Genre>} */
    const { rows } = await pool.query(`SELECT * FROM genres`)
    res.send(rows)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

module.exports = router
