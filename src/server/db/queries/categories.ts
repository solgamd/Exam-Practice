import { knextion as knex } from '../index';

const getAll = () => knex('categories').select();


export default {
    getAll,
}