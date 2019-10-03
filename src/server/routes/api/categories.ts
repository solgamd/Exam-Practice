import { Router } from 'express';

const router = Router();

router.use();
router.get('/test', async (req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router;