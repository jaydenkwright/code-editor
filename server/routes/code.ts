import express, {Request, Response, Router} from 'express'
import { CoreTransformationContext } from 'typescript'
import { pool } from '../db/db'
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
            res.json({})
        }
    } catch (error) {
        res.json({'msg': 'Something went wrong!'})
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
            res.json({})
        }
    } catch (error) {
        res.json({'msg': 'Something went wrong!'})
    }
})

router.post('/create', async (req: Request, res: Response) => {
    try{
        const { userId, projectId, lang, code } = req.body
        const newCode = await pool.query(
            "INSERT INTO code (userId, projectId, lang, code, lastUpdated, date) VALUES($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING *", 
            [userId, projectId, lang, code]
        )
        res.json(newCode.rows[0])
    }catch(error){
        res.json({"msg": "Something went wrong!"})
    }
})

router.put('/update/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { code } = req.body
        const updateCode = pool.query(
            "UPDATE code SET code = $1, lastUpdated = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
            [code, id]
        )
        res.json({"msg": "Updated"})
    } catch (error) {
        res.json({"msg": "Something went wrong!"})
    }
})

router.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deleteCode = pool.query(
            "DELETE FROM code WHERE id = $1",
            [id]
        )
        res.json({"msg": "Deleted"})
    } catch (error) {
        res.json({"msg": "Something went wrong!"})
    }
})

export default router