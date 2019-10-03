import { knextion as knex } from '../index';

const getAll = () => knex('books').select();
const getOne = (id: number) => knex('books').select().where({ id });
const insert = (obj: { title: string, author: string, price: number, categoryid: number }) => knex('books').insert(obj);
const remove = (id: number) => knex('books').delete().where({ id });
const edit = (obj: { title?: string, author?: string, price?: number, categoryid?: number }, id: number) => knex('books').update(obj).where({ id });

export default {
    getAll,
    getOne,
    insert,
    remove,
    edit
}