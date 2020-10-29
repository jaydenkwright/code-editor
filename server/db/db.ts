import { Pool } from 'pg'
import dotenv from 'dotenv'
dotenv.config()
console.log(process.env.DB_USER)

export const pool: Pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
})