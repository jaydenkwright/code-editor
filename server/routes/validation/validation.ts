import Joi from '@hapi/joi'

export const registrationSchema = Joi.object({
    name: Joi.string().min(1).max(50).required(),
    username: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(7).max(200).required().email(),
    password: Joi.string().min(6).max(300).required()
})

export const loginSchema = Joi.object({
    email: Joi.string().max(200).required().email(),
    password: Joi.string().max(300).required()
})