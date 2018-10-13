import express from 'express';
import morgan from 'morgan';
import winston from './config/winston';
import routes from './routes/routes';
require('dotenv').config();
require('./models');
const app = express();

app.use(morgan('combined', { stream: winston.stream }));
app.use(routes);

const server = app.listen(
    process.env.PORT,
    () => winston.info(`app is working on http://localhost:${server.address().port}`)
);
