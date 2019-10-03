import * as knex from 'knex';

import config from '../config';

export const knextion = knex(config.knex);

import Books from './queries/Books';
import Users from './queries/Users';
import Categories from './queries/Categories';
import Tokens from './queries/Tokens';


export default {
    Books,
    Users,
    Categories,
    Tokens
}