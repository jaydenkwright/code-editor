import express, {Request, Response, Router} from 'express'
import { pool } from '../db/db'
import { verify } from './middleware/verify'
const router = Router()

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const code = await pool.query(
            "SELECT * FROM code WHERE id = $1",
            [id]
        )
        if (code.rows[0]){
            res.json(code.rows[0])
        }else{
            res.status(404).json({"msg": "Snippet could not be found!"})
        }
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.get('/project/:projectId', async (req: Request, res: Response) => {
    try {
        const { projectId } = req.params
        const projectCode = await pool.query(
            "SELECT * FROM code WHERE projectId = $1",
            [projectId]
        )
        if (projectCode.rows){
            res.json(projectCode.rows)
        }else{
            res.status(404).json({"msg": "Project could not be found!"})
        }
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.post('/create', verify, async (req: any, res: Response) => {
    try{
        const { user } = req
        const { projectId, lang, code } = req.body
        const newCode = await pool.query(
            "INSERT INTO code (userId, projectId, lang, code, lastUpdated, date) VALUES($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *", 
            [user.id, projectId, lang, code]
        )
        res.json(newCode.rows[0])
    }catch(error){
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.put('/update/:lang/:id', verify, async (req: any, res: Response) => {
    try {
        const { user } = req
        const { lang, id } = req.params
        const { code } = req.body
        const updateCode = pool.query(
            "UPDATE code SET code = $1, lastUpdated = CURRENT_TIMESTAMP WHERE projectId = $2 AND userId = $3 AND lang = $4",
            [code, id, user.id, lang]
        )
        res.json({"msg": "Updated"})
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.delete('/delete/:id', verify, async (req: any, res: Response) => {
    try {
        const { user } = req
        const { id } = req.params
        const deleteCode = pool.query(
            "DELETE FROM code WHERE id = $1 AND userId = $2",
            [id, user.id]
        )
        res.json({"msg": "Deleted"})
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

export default router