import bcrypt from 'bcrypt';

export default function (data: string): Promise<string> {
    return new Promise((resolve, reject) => {
        bcrypt
            .genSalt(10)
            .then((salt) => {
                bcrypt
                    .hash(data, salt)
                    .then((hash) => {
                        resolve(hash);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            })
            .catch((err) => {
                reject(err);
            });
    });
}
