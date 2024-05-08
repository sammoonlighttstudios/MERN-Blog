import express from 'express';
import { sighin, sighup } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/signup', sighup);
router.post('/signin', sighin);



 export default router;
