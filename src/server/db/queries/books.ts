import { knextion as knex } from '../index';

const getAll = () => knex('books').select();
const getOne = (id: number) => knex('books').select().where({ id });
// const getAll = () => knex();
// const getAll = () => knex();

export default {
    getAll,
    getOne
}