import express from 'express'
import code from './routes/code'
import projects from './routes/projects'
import dotenv from 'dotenv'
import cors from 'cors'
import user from './routes/user'
import cookieParser from 'cookie-parser'
import * as path from 'path';
dotenv.config()

const app: express.Application = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*',
    credentials: true
}));

console.log(process.env.GITHUB_USERNAME)

app.use('/api/code', code)
app.use('/api/project/', projects)
app.use('/api/user/', user)
const root = path.join(__dirname+'/build/')
app.use(express.static(root));
app.get('/*', (req, res) => {
    res.sendFile('index.html', { root });
});

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})