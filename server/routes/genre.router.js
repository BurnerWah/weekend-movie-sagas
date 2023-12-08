const { Router } = require('express')
const pool = require('../modules/pool')

const router = Router()

router.get('/', (req, res) => {
  // Add query to get all genres
  res.sendStatus(500)
})

module.exports = router
