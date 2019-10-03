import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let result = await db.Categories.getAll();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router;