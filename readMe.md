## References

1. https://medium.com/@prashantramnyc/authenticate-rest-apis-in-node-js-using-jwt-json-web-tokens-f0e97669aad3
2. https://auth0.com/blog/hashing-in-action-understanding-bcrypt/#Implementing--bcrypt
3. https://www.npmjs.com/package/dotenv
4. https://www.npmjs.com/package/jsonwebtoken
5. https://firebase.google.com/docs/database/web/read-and-write
6. https://tailwindcss.com/docs/border-color
7. https://www.geeksforgeeks.org/how-do-you-handle-nested-routes-in-express-js/
8. https://www.geeksforgeeks.org/express-js-express-router-function/
9. https://expressjs.com/en/4x/api.html#express.router

## Dependencies USED:

1.  Node Js - main framework
2.  Tailwind CSS - style library
3.  Nodemon - Live server for node
4.  express - server for node
5.  bcrypt - used to encrypt and decrpt the password. As plain password should not be stored in database.
6.  dotenv - for environment variables
7.  firebase - database https://console.firebase.google.com/project/node-token-b5f24/database/node-token-b5f24-default-rtdb/data
8.  jsonwebtoken - JWT token for security signature between API calls
9.  uuid - generating a ID for users

## INDEX.JS

Initialized the app in index.js. Linked firebase

## userRoute

Contains 3 routes

1. /user/register - when user clicks on register button, API call to save user is done with body {email, password}.
   As password cannot be saved directly in DB, using bcrypt to generate a hash password. Setting the entry in DB using set method of firebase and passing a unique ID using uuid. Once data is saved status code 201 is send.
2. /user/signIn - When the user is registered and tries to sign In with same username and password signInuser API is called. OnValue function of firebase is used to query the collections in FB to find the same user if present matching with the email id. If the user node is found, validate the password using bcrypt compare function. If the user is validated generate the token and send that token back in response. Send that token as headers to /user/get API
3. /user/get - If tried to access this api directly - authentication is failed. Can be accessed only with JWT token which is passed when user sighIn with proper credentials. In this api validateToken function is called as middleware which checks the headers. If token is not present then return "UNAUTH ACCESS". If token is present jwt.verify is used to verify the signature. If decoded token values are correct send status code 200
