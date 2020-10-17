import express from 'express'

const app: express.Application = express()

app.listen(5000, () => {
    console.log('started')
})