import express from 'express';
import { sighup } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/sighup', sighup);



 export default router;
