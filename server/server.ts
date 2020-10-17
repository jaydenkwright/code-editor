import express from 'express'
import code from './routes/code'
import dotenv from 'dotenv'
dotenv.config()

const app: express.Application = express()
app.use(express.json())

app.use('/api/code', code)
app.use('/api/project/', () => {})
app.use('/api/user/', () => {})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})