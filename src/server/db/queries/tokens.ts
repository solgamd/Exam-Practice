import { knextion as knex } from '../index';

const findOne = (id: number, token: string) => knex('tokens').select().where({ id, token });

const insert = (userid: number) => knex('tokens').insert({ userid });

const update = (id: number, token: string) => knex('tokens').update({ token }).where({ id });

export default {
    findOne,
    insert,
    update
}