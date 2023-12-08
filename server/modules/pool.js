const pg = require('pg')

// This is just to access these variables with shorter names
const { DATABASE_URL, NODE_ENV } = process.env

/**
 * The DB config to use when deployed to Heroku.
 * The DATABASE_URL will be set to something like
 * `DATABASE_URL=postgresql://username:password@some.db.com/prime_app`
 * @type {pg.PoolConfig}
 */
const urlConfig = {
  connectionString: DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // DevSkim: ignore DS125134
}

/**
 * The DB config to use when running locally.
 * In tests it'll use a `prime_testing` database, otherwise it'll use
 * `saga_movies_weekend`.
 * @type {pg.PoolConfig}
 */
const localConfig = {
  host: 'localhost',
  port: 5432,
  database: NODE_ENV === 'test' ? 'prime_testing' : 'saga_movies_weekend',
}

const pool = new pg.Pool(DATABASE_URL ? urlConfig : localConfig)

module.exports = pool
