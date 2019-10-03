import { Router } from 'express';
import db from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let books = await db.Books.getAll();
        res.json(books);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

router.get('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        let book = await db.Books.getOne(id);
        res.json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});


export default router;