// function writeUserData(getDatabase, ref, set, userId, name, email) {
//     const db = getDatabase();
//     set(ref(db, 'users/' + userId), {
//         username: name,
//         email: email,
//     }).then(() => {
//         console.log('Data saved successfully!')
//     })
//         .catch((error) => {
//             console.log("error", error)
//         });;
// }

// export default writeUserData;