import express from 'express';
import { sighin, sighup } from '../controllers/auth.controller.js';


const router = express.Router();

router.post('/sighup', sighup);
router.post('/sighin', sighin);



 export default router;
