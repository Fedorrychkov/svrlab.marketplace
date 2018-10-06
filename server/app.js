import express from 'express';
import morgan from 'morgan';
import winston from './config/winston';
require('dotenv').config();

const app = express();

app.use(morgan('combined', { stream: winston.stream }));
const server = app.listen(
    process.env.PORT,
    () => winston.info(`app is working on http://localhost:${server.address().port}`)
);