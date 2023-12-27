const isValueEmpty = (emailVal, password) => {
    return (emailVal === '' || password === '' ? true : false);
}

export default isValueEmpty;