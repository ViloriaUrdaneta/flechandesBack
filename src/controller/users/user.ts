import express from 'express';
import { User } from '../../entity/User';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send('GET')
})

router.post('/', async (req, res) => {
    const {
        name,
        email
    } = req.body

    const user = User.create({
        name : name,
        email: email
    });

    await user.save();

    return res.json(user)
})

export default router