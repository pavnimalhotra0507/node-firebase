import 'dotenv/config';
import getUser from './get.js';
import registerUser from './register.js';
import signInUser from './signIn.js';
import verifyToken from '../../public/middleware/validateToken.js';

const userRoute = (router) => {
    router.get('/get', verifyToken, getUser);
    router.post('/register', registerUser);
    router.post('/signIn', signInUser);
};

export default userRoute;