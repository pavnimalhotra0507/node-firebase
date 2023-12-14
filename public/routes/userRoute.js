import { v4 as uuidv4 } from 'uuid';

const userRoute = (app, getDatabase, set, ref) => {
    app.get('/getUsers', (res, req) => {
        req.status(200);
    });

    app.post('/saveUser', (req, res) => {
        console.log(req.body, "body");
        const db = getDatabase();
        set(ref(db, 'users/' + uuidv4()), {
            email: req.body.email,
            password: req.body.password,
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