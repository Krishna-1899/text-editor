import { Router } from 'express';
import { createNews, getAllNews } from '../controllers/newsController.js';

const router = Router();

router.post('/', createNews);
router.get('/', getAllNews);

export default router;