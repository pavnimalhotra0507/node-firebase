import bcrypt from "bcrypt";

const validateUserCred = async (plainPassword, childData) => {
    const isValid = await bcrypt.compare(plainPassword, childData.password);
    return isValid;
};

export default validateUserCred;