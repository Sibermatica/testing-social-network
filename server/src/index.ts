import express from 'express';
const app = express();

import './config.js'; // load environment
import './database.js'; // load the database

import router from './routes/index.routes.js';

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use((req, _, next) => {
    console.log(`${req.url} -${req.method}`);

    next();
});

// routes
app.use(router);

// listen
app.listen(app.get('port'), () => {
    console.log(`Server running: ${app.get('port')}`);
});
