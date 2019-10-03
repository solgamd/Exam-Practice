import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
    console.log('pass', password);

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
};

export const comparePassword = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}