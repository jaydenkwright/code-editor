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
    
})

router.get('/:id', async (req: Request, res: Response) => {

})

router.put('/:id', async (req: Request, res: Response) => {
    
})

router.delete('/:id', async (req: Request, res: Response) => {
    
})

export default router