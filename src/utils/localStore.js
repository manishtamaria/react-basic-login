
export const storeEmailAndToken = (email, token) => {
    localStorage.setItem('email', email);
    localStorage.setItem('login_Token', token);
}


export const storeUserDetails = (id, token, firstName, lastName) => {
    localStorage.setItem('user_ID', id);
    localStorage.setItem('user_Token', token);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
}

export const storeEmail = (email) => {
    localStorage.setItem('email', email);
}

export const clearStorage = () => {
    localStorage.clear();
}