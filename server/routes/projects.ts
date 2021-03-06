import express, {Request, Response, Router} from 'express'
import { pool } from '../db/db'
import { verify } from './middleware/verify'
const router = Router()

router.post('/create', verify, async (req: any, res: Response) => {
    try {
        const { id } = req.user
        const { title, description, privacy } = req.body
        const createProject = await pool.query(
            "INSERT INTO projects (userId, title, description, private, date) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *",
            [id, title, description, privacy]
        )
        res.json(createProject.rows[0])
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.get('/user/', verify, async (req: any, res: Response) => {
    const { id } = req.user
    try {
        const userProjects = await pool.query(
            "SELECT * FROM projects WHERE userId = $1 ORDER BY id DESC",
            [id]
        )
        if (userProjects.rows){
            res.json(userProjects.rows)
        }else{
            res.status(404).json({"msg": "No projects found!"})
        }
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.get('/:projectId', verify, async (req: any, res: Response) => {
    try{
        const { id } = req.user
        const { projectId } = req.params
        const project = await pool.query(
            "SELECT * FROM projects WHERE id = $1 AND (private = $2 OR userId = $3)",
            [projectId, false, id]
        )
        if (project.rows[0]){
            res.json(project.rows[0])
        }else{
            res.status(404).json({"msg": "Could not find project!"})
        }
    } catch(error){
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.put('/update/:projectId', verify, async (req: any, res: Response) => {
    try {
        const { id } = req.user
        const { projectId } = req.params
        const { title, description, privacy } = req.body
        const updateProject = pool.query(
            "UPDATE projects SET title = $1, description = $2, private = $3 WHERE id = $4 AND userId = $5",
            [title, description, privacy, projectId, id]
        )
        res.json({"msg": "Updated"})
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.delete('/delete/:projectId', verify, async (req: any, res: Response) => {
    try {
        const { id } = req.user
        const { projectId } = req.params
        const deleteProject = await pool.query(
            "DELETE FROM projects WHERE id = $1 AND userId = $2",
            [projectId, id]
        )
        res.json({"msg": "Deleted"})
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

export default router