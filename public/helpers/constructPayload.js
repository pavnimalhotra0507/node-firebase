const constructPayload = () => {
    const emailVal = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const data = {
        email: emailVal,
        password: password
    }
    return data;
}

export default constructPayload;