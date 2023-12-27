import bcrypt from "bcrypt";
import { ref, set, getDatabase } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

const registerUser = async (req, res) => {
    const db = getDatabase();
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
}
export default registerUser;