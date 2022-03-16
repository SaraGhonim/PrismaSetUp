import express, { Express } from 'express';
import cors from 'cors';
import routes from './src/api//v3/routes/index';
import { errorHanlder, notFoundHandler } from './src/middlewares/errorHandler';

const app = express() as Express;

app.use(express.json());
app.use(cors());

app.use('/api/', routes);
app.use(errorHanlder);
app.use(notFoundHandler);

app.listen(3000, () => console.log('Server is running on port 3000'));


export default app;
