import e from 'express'
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
    try{
        const userId = 1
        const { id } = req.params
        const project = await pool.query(
            "SELECT * FROM projects WHERE id = $1 AND (private = $2 OR userId = $3)",
            [id, false, userId]
        )
        if (project.rows[0]){
            res.json(project.rows[0])
        }else{
            res.json({})
        }
    } catch(error){
        res.json({"msg": "Something went wrong!"})
    }
})

router.put('/update/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const userId = 1
        const { title, description, privacy } = req.body
        const updateProject = pool.query(
            "UPDATE projects SET title = $1, description = $2, private = $3 WHERE id = $4 AND userId = $5",
            [title, description, privacy, id, userId]
        )
        res.json({"msg": "Updated"})
    } catch (error) {
        res.json({"msg": "Something went wrong!"})
    }
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const userId = 1
        const { id } = req.params
        const deleteProject = pool.query(
            "DELETE FROM projects WHERE id = $1 AND userId = $2",
            [id, userId]
        )
        res.json({"msg": "Deleted"})
    } catch (error) {
        res.json({"msg": "Something went wrong!"})
    }
})

export default router