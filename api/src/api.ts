import 'dotenv/config';
import express from 'express';
import cors from 'cors';

// import routes
import imageRouter from './routes/images';

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

// use routes
app.use('/api/images', imageRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    console.log(`http://localhost:${port}`);
});