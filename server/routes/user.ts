import express, { Request, Response, Router } from 'express'
import { pool } from '../db/db'
import Joi from '@hapi/joi'
import bcrypt from 'bcryptjs'
const router = Router()

const registrationSchema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    username: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(7).max(200).required().email(),
    password: Joi.string().min(6).max(300).required()
})

router.post('/register', async (req: Request, res: Response) => {
    const { error } = registrationSchema.validate(req.body)
    if (error) res.status(400).json({"msg": "Something went wrong!"})
    const { name, username, email, password } = req.body
    const emailExists = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    )
    if (emailExists.rows[0]) return res.status(400).json({"msg": "Email is already in use!"})

    const usernameExists = await pool.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
    )
    if (usernameExists.rows[0]) return res.status(400).json({"msg": "Username is already taken!"})

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = await pool.query(
        "INSERT INTO users (name, username, email, password, date) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *",
        [name, username, email, hashedPassword]
    )

    res.json({"msg": "User created"})
})

const loginSchema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    username: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(7).max(200).required().email(),
    password: Joi.string().min(6).max(300).required()
})

router.post('/login', (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        
    }
})

router.get('/me', (req: Request, res: Response) => {

})

router.get('/isLoggedIn', (req: Request, res: Response) => {

})

export default router