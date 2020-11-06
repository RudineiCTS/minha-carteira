import express from 'express';
import routes from './routes/index';
// import errorHandle from './errors/handle';

const app = express();

app.use(express.json());
app.use(routes);
// app.use(errorHandle);

app.listen(3333, () => console.log('serve started'));
