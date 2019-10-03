import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as passport from 'passport';
import './middleware/bearerstrategy';
import './middleware/localstrategy';
import routes from './routes';

const app = express();

app.use(passport.initialize());
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
