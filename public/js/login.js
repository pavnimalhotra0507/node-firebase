import isValueEmpty from "../helpers/inputValidationChecks.js";
import signInUser from "../api/signInUser.js";
import saveUserData from "../api/saveUser.js";
import constructPayload from "../helpers/constructPayload.js";

document.querySelector('.signUpBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = constructPayload();
    if (isValueEmpty(data.emailVal, data.password)) {
        alert("Values are empty")
    } else {
        saveUserData(data);
    }
});

document.querySelector('.signInBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = constructPayload();
    if (isValueEmpty(data.emailVal, data.password)) {
        alert("Values are empty")
    } else {
        signInUser(data);
    }
});