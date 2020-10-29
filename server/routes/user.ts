import express, { Request, Response, Router } from 'express'
import { pool } from '../db/db'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verify } from './middleware/verify'
import { registrationSchema, loginSchema } from './validation/validation'
const router = Router()

router.post('/register', async (req: Request, res: Response) => {
    try{
        const { error } = registrationSchema.validate(req.body)
        if (error) return res.status(400).json({"msg": "Something went wrong!"})
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
    }catch(error){
        console.log(error)
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { error } = loginSchema.validate(req.body)
        if (error) return res.status(400).json({"msg": "Something went wrong!"})

        const { email, password } = req.body
        const user = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )
        if (!user.rows[0]) return res.status(400).json({"msg": "Email is incorrect"})
        
        const validatePassword = await bcrypt.compare(password, user.rows[0].password)
        if (!validatePassword) return res.status(400).json({'msg': 'Password is incorrect'})

        const token = jwt.sign({id: user.rows[0].id}, `${process.env.TOKEN_SECRET}`)

        res.cookie('token', token, {
            httpOnly: true,
        })
       res.header('login-token', token).json({'msg': 'Logged In!'})


    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.get('/me', verify, async (req: any, res: Response) => {
    const { id } = req.user
    try {
        const user = await pool.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        )
        const { name, username, email, } = user.rows[0]
        res.json({
            id: user.rows[0].id,
            name,
            username,
            email
        })
    } catch (error) {
        res.status(500).json({"msg": "Something went wrong!"})
    }
})

router.get('/isLoggedIn', verify, async(req: Request, res: Response) => {
    return res.json({"msg": "Logged in!"})
})

export default router