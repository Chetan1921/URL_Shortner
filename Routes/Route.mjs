import express from 'express';
import { generateNewUrl ,redirectToShortURL,handlegetVisitHistory } from '../controller/Controller.mjs';
const router=express.Router();
router.post('/generateurl',generateNewUrl);
router.get('/:shortID',redirectToShortURL);
router.get('/visitHistory/:shortID',handlegetVisitHistory);
export default router;