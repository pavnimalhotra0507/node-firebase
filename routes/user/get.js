const getUser = (req, res) => {
    res.status(200).json({ statusCode: 200, message: "User is logged In welcome" });
}

export default getUser;