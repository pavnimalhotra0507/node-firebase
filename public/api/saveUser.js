const saveUserData = async (data) => {
    const response = await fetch("./user/register", {
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

export default saveUserData;