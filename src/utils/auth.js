import {API_URL} from "./constants";

function checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = ( {password, email, name} ) => {
    return fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            email: email,
            name: name
        }
        )
    })
        .then((res) => {
        return checkResponse(res);
    });
};

export const authorize = (password, email) => {
    return fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                "password": password,
                "email": email
            }
        )
    })
        .then((response => response.json()))
    //.then((data) => {
    //    if (data.token){
    //        localStorage.setItem('jwt', data.token);
    //        return data.token;
    //    }
    // })
};

export const checkToken = () => {
    return fetch(`${API_URL}/users/me`, {
        credentials: 'include',
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            //"Authorization": `Bearer ${token}`
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            else {
                console.log(`Ошибка: ${res.status}`);
            }
        })
        .then(data => data)
}