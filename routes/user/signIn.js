import { ref, onValue, getDatabase } from "firebase/database";
import validateUserCred from '../../public/helpers/validateUserCred.js';
import jwt from 'jsonwebtoken';

const signInUser = async (req, res) => {
    const db = getDatabase();
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
}

export default signInUser;
