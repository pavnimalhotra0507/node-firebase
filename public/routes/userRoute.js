import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import bcrypt from "bcrypt";
import validateUserCred from '../js/validateUserCred.js';
import verifyToken from '../js/validateToken.js';

const userRoute = (app, getDatabase, set, ref, onValue) => {
    const db = getDatabase();
    app.get('/getUser', verifyToken, (req, res) => {
        res.status(200).json({ statusCode: 200, message: "User is logged In welcome" });
    });

    app.post('/signInUser', async (req, res) => {
        const usersRef = ref(db, 'users/');
        onValue(usersRef, (snapshot) => {
            snapshot.forEach(function (childSnapshot) {
                var childData = childSnapshot.val();
                if (childData.email === req.body.email) {
                    console.log('User found: ', childData);
                    const isValidCred = validateUserCred(req.body.password, childData);
                    if (isValidCred) {
                        var token = jwt.sign({ childData }, process.env.JWT_SECRET);
                        res.status(200).json({ token: token, statusCode: 200 });
                    }
                }
            });
        })
        // const snapshot = await get(ref(db, 'users/').once('value');

        // var token = jwt.sign({ foo: 'bar' }, process.env.JWT_SECRET);
        // console.log(token)
        // res.status(200).json({ message: "hello", statusCode: 200 });
    });

    app.post('/saveUser', async (req, res) => {
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        set(ref(db, 'users/' + uuidv4()), {
            email: req.body.email,
            password: hashpassword,
        }).then(() => {
            console.log("data saved")
            res.status(201).json({ message: "Data saved successfully", statusCode: 201 });
        })
            .catch((error) => {
                res.status(400).json({ message: error, statusCode: 400 });
            });
    });
};

export default userRoute;