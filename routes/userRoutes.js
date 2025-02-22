import { createUser } from '../controller/userConroller.js';
import express from 'express';

export const router = express.Router();

router.post('/create', createUser);
router.get('/', (req, res) => {
    res.send('Hello from Users Route')
})

