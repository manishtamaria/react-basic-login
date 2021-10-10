export const validateNumber = (event) => {
    const keyCode = event.keyCode;

    const excludedKeys = [8, 37, 39, 46];

    if (!((keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 96 && keyCode <= 105) ||
        (excludedKeys.includes(keyCode)))) {
        event.preventDefault();
    }

}

export const validateEmail = (event) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(event);

}

//Reusable post function which can be used for PUT method too

export const postData = async (method, data, url) => {
    const requestOptions = {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };
    const response = await fetch(
        `/${url}`,
        requestOptions
    );

    const postResponse = await response.json();
    return postResponse;

}

//used for PUT method without any body object
export const urlData = async (url) => {
    const requestOptions = {
        method: 'PUT'
    };
    const response = await fetch(
        `/${url}`,
        requestOptions
    );

    const postResponse = await response.json();
    return postResponse;
}

//Authentication function
export const authUpdate = async (method, data, id, token) => {
    const requestOptions = {
        method,
        headers: {
            'Authorization': `Bearer ${id},${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(
        `/users/${id}`,
        requestOptions
    );
    const updateResponse = await response.json();
    return updateResponse;
}

//Logout profile function
export const logoutProfile = async (id, token) => {
    const requestOptions = {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${id},${token}`,
            'Content-Type': 'application/json'
        }
    }
    const response = await fetch(
        `/users/logout/${id}`,
        requestOptions
    );
    const logoutResponse = await response.json();
    return logoutResponse;
}


export const BASEURL = '/user';