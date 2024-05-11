import express from 'express';
import { google, sighin, sighup } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/signup', sighup);
router.post('/signin', sighin);
router.post('/google', google);



 export default router;
