import { knextion as knex } from '../index';


const findEmail = (email: string) => knex('users').select().limit(1).where({ email });

const findId = (id: number) => knex('users').select().limit(1).where({ id });

const insertUser = (email: string, password: string, name: string) => knex('users').insert({ email, password, name });

export default {
    findEmail,
    findId,
    insertUser
}