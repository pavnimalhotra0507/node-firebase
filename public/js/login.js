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

document.querySelector('.signInBtn').addEventListener('click', (e) => {
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
        signInUser(data);
    }
});

const signInUser = async (data) => {
    const response = await fetch("./signInUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    if (resp.statusCode === 200) {
        let userResponse = await fetch("./getUser", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": resp.token
            }
        });
        userResponse = await userResponse.json();
        if (userResponse.statusCode === 200) {
            alert(userResponse.message)
        }
    }
}

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