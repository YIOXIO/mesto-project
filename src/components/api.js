const config = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: 'eb0f5dbc-8b03-4a49-97c7-ce41064b06b6',
        'Content-type': 'application/json'
    }
};



const postNewCard = {
    return: fetch(`${config.baseUrl}/cards`, {
        method: 'POST',
        headers: {
            authorization: 'eb0f5dbc-8b03-4a49-97c7-ce41064b06b6',
            'Content-type': 'application/json'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`)
        }),
}




const getUserInfo = {
    return: fetch(`${config.baseUrl}/users/me`, {
        method: 'GET',
        headers: {
            authorization: 'eb0f5dbc-8b03-4a49-97c7-ce41064b06b6'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Error: ${res.status}`)
        })
}




export { getUserInfo, postNewCard }