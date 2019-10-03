import { Router } from 'express';
import booksRouter from './books';
import categoriesRouter from './categories'

const router = Router();

router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);

export default router;