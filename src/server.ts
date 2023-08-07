import "./tracer";

import express from 'express';
import cors from 'cors';

require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/log', async (req, res) => {
    console.log('log', req.query)
    console.error('error', req.query)
    console.warn('warn', req.query)
    console.info('info', req.query)

    res.send('OK')
});

app.listen(process.env.PORT, () => {
    return console.log(`🚀 Server started on port ${process.env.PORT}!`)
});