import { Router } from 'express';
import db from '../../db';
import { RequestHandler } from 'express-serve-static-core';

const router = Router();

const isAdmin: RequestHandler = (req: any, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        // console.log(req.user);
        return res.sendStatus(401);
    }
}

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

router.post('/', async (req, res, next) => {
    let newBook = {
        title: req.body.title, 
        author: req.body.author, 
        price: req.body.price, 
        categoryid: req.body.categoryid
    }
    try {
        let result = await db.Books.insert(newBook);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        await db.Books.edit(req.body, req.params.id);
        res.json('Edit successful!');
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

router.delete('/:id', async (req, res, next) => {
    let id = req.params.id;
    try {
        await db.Books.remove(id);
        res.json('Book deleted!');
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router;