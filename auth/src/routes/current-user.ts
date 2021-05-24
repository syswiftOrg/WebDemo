import express from 'express';

import {currentUser} from '../middlewares/currentUser';

const router = express.Router();

router.get('/api/auth/currentuser', currentUser, (req, res) =>{
    res.send({currentUser: req.currentUser || null});
});

export {router as currentUserRouter};