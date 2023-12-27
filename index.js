import express from 'express';
const app = express();
const router = express.Router();
import userRoute from './routes/user/userRoute.js';
import { initializeApp } from "firebase/app";
import path from 'path';
import bodyParser from 'body-parser';
import config from './firebaseConfig.js';
import 'dotenv/config';
// export default app;

// __dirname cannot be used when package.json has type="module"
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const firebaseConfig = config;
// Initialize Firebase
initializeApp(firebaseConfig);
app.use(express.static('public')); // to server html, css,js
app.use(bodyParser.json()); // to read the req body
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/user', router);

userRoute(router);

app.listen(process.env.PORT, () => {
    console.log('listening to ', process.env.PORT)
});

app.get('/', (res, req) => { });