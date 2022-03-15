import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import router from "./src/api/v3/routes/notes.routes";


const app = express() as Express;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);

app.listen(3001, () => console.log('Server is running on port 3001'));


export default app;
