document.querySelector('.signUpBtn').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const emailVal = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const data = {
        email: emailVal,
        password: password
    }
    if (emailVal === '' || password === '') {
        alert("Values are empty")
    } else {
        saveUserData(data);
    }
});

const saveUserData = async (data) => {
    const response = await fetch("./saveUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    if (resp.statusCode === 201) {
        alert('Successfully Signed Up!');
    }
}