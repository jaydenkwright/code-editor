import express, {Request, Response, Router} from 'express'
import { create } from 'ts-node'
import { pool } from '../db/db'
const router = Router()

router.post('/create', async (req: Request, res: Response) => {
    try {
        const { userId, title, description, privacy } = req.body
        const createProject = await pool.query(
            "INSERT INTO projects (userId, title, description, private, date) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *",
            [userId, title, description, privacy]
        )
        res.json(createProject.rows[0])
    } catch (error) {
        res.json({"msg": "Something went wrong!"})
    }
})

router.get('/user/:userId', async (req: Request, res: Response) => {
    const { userId } = req.params
    try {
        const userProjects = await pool.query(
            "SELECT * FROM projects WHERE userId = $1 ORDER BY id DESC",
            [userId]
        )
        if (userProjects.rows){
            res.json(userProjects.rows)
        }else{
            res.json({})
        }
    } catch (error) {
        res.json({"msg": "Something went wrong!"})
    }
})

router.get('/:id', async (req: Request, res: Response) => {
    const userId = 3
    const { id } = req.params
    const project = await pool.query(
        "SELECT * FROM projects WHERE (id = $1 AND private = $2) OR userId = $3",
        [id, false, userId]
    )
    if (project.rows[0]){
        res.json(project.rows[0])
    }else{
        res.json({"msg": "Something went wrong!"})
    }
})

router.put('/:id', async (req: Request, res: Response) => {
    
})

router.delete('/:id', async (req: Request, res: Response) => {
    
})

export default router