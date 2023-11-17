import express from 'express';
import {getUsers, createUser, getUser, deleteUser, updateUser} from '../controller/users.js'

const router = express.Router();

router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser);

router.get('/delete/:id', deleteUser)

router.patch('/update/:id', updateUser)

export default router;