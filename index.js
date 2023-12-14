import express from 'express';
const app = express();
import userRoute from './public/routes/userRoute.js';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import path from 'path';
import bodyParser from 'body-parser';
import config from './firebaseConfig.js';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const firebaseConfig = config;

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);
console.log(path.join(__dirname, 'dist'))
app.use(express.static(path.join(__dirname, 'dist/login.js')));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

userRoute(app, getDatabase, set, ref);

app.listen(3000, () => {
    console.log('listening')
});

app.get('/', (res, req) => { });