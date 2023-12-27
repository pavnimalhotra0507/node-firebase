const signInUser = async (data) => {
    const response = await fetch("./user/signIn", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const resp = await response.json();
    if (resp.statusCode === 200) {
        let userResponse = await fetch("./user/get", {
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

export default signInUser;