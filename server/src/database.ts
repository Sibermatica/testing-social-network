import mongoose from 'mongoose';

import { DATABASE_URI } from './config.js';

mongoose.connect(DATABASE_URI)
    .then(() => {
        console.log("Database: connected.");
    })
    .catch((err) => {
        console.error(`Database: failed.\n${err}`);
    });
