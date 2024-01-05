import bcrypt from 'bcrypt';

import { SALT } from '../config.js';

export default function (data: string): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt
            .hash(data, SALT)
            .then((hash) => {
                resolve(hash);
            })
            .catch((err) => {
                reject(err);
            });
    });
}
