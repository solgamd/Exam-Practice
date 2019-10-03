import * as express from 'express';
import { hashPassword } from '../../utils/security/password';
import DB from '../../db';
import { CreateToken } from '../../utils/security/tokens';

const router = express.Router();

router.post('/', async (req: any, res, next) => {
    try {
        let user = {...req.body};
        user.password = hashPassword(req.body.password);
        let [result]: any = await DB.Users.insertUser(user.email, user.password, user.name);
        //console.log(result)
        let token = await CreateToken({ userid: result });
        res.json({
            token,
            role: 'admin',
            userid: result
        })
    } catch (error) {
        console.log(error);
        res.status(500).json('An error occured!');
    }
});

export default router;