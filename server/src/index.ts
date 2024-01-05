import express from 'express';
const app = express();

import './config.js'; // load environment
import './database.js'; // load the database

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use((req, _, next) => {
    console.log(`${req.url} -${req.method}`);

    next();
});

// routes
app.get('/', (_, res) => {
    res.json({message: "Testing"});
});

// listen
app.listen(app.get('port'), () => {
    console.log(`Server running: ${app.get('port')}`);
});
