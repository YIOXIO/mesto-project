export const config = {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-24',
    headers: {
        authorization: "eb0f5dbc-8b03-4a49-97c7-ce41064b06b6",
        "Content-type": "application/json"
    }
};

async function getUserInfo() {
    const res = await fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: config.headers
    });
    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

async function getInitialCards() {
    const res = await fetch(`${config.baseUrl}/cards`, {
        method: 'GET',
        headers: config.headers
    });

    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

async function patchProfile(name, about) {
    const res = await fetch(`${config.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            about: about
        })
    });
    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

async function patchAvatar(url) {
    const res = await fetch(`${config.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: config.headers,
        body: JSON.stringify({
            avatar: url
        })
    });
    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

async function postNewCard(newName, link) {
    const res = await fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: newName,
            link: link
        })
    });
    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

async function deleteCard(cardId) {
    const res = await fetch(`${config.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: config.headers
    });
    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

async function putLike(cardId) {
    const res = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: config.headers
    });
    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

async function deleteLike(cardId) {
    const res = await fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: config.headers,
    });
    if (res.ok) {
        return res.json();
    }
    return await Promise.reject(`error: ${res.status}`);
}

export {
    getUserInfo,
    getInitialCards,
    patchProfile,
    patchAvatar,
    postNewCard,
    deleteCard,
    putLike,
    deleteLike
}

