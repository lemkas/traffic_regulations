const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const Role = require('../models/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {secret} = require('../config')

const generateAccessToken = (id, roles) => {
    const payload = {
        id, 
        roles
    }

    return jwt.sign(payload, secret, { expiresIn: '24h' }  )
}


router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body.data
        const user = await User.findOne({email})
        if(!user) {
            return res.json({ message: `Неверный логин или пароль`, status: '400' })
        }

        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword) {
            return res.json({ message: `Неверный логин или пароль`, status: '400' })
        }

        if(user && validPassword) {
            const token = generateAccessToken(user._id, user.roles)
            return res.json({ message: 'Авторизация прошла успешно!', token })
        }
        

    } catch (e) {
        res.status(400).json({message: 'Что-то пошло не так! Попробуйте снова'})
    }
})

router.post('/register', async (req, res) => {
    try {
        const {email, password, firstName, surname} = req.body.data
        
        const candidate = await User.findOne({email})

        if(candidate) {
            return res.json({ message: 'Такой email уже зарегистрирован', status: '400' })
        }

        const hashedPassword = bcrypt.hashSync(password, 9)
        console.log(hashedPassword)
        const userRole = await Role.findOne({value: 'USER'})
        const user = new User({email, password: hashedPassword, firstName, surname, roles: [userRole.value]})
        await user.save()
        return res.json({message: 'Вы зарегистрированы!'})
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Что-то пошло не так! Попробуйте снова'})
    }
})

module.exports = router