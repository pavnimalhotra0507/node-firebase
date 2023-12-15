import express from 'express';
const app = express();
import userRoute from './public/routes/userRoute.js';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import path from 'path';
import bodyParser from 'body-parser';
import config from './firebaseConfig.js';
import 'dotenv/config';

// __dirname cannot be used when package.json has type="module"
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const firebaseConfig = config;

// Initialize Firebase
initializeApp(firebaseConfig);
app.use(express.static('public')); // to server html, css,js
app.use(bodyParser.json()); // to read the req body
app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app, getDatabase, set, ref, onValue);

app.listen(process.env.PORT, () => {
    console.log('listening to ', process.env.PORT)
});

app.get('/', (res, req) => { });