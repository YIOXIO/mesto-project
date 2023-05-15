const config = {
    baseUrl: 'https://nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: 'eb0f5dbc-8b03-4a49-97c7-ce41064b06b6',
        'Content-type': 'application/json'
    }
};

// function postNewCard() {
//     fetch(`${config.baseUrl}/cards`, {
//         method: 'POST',
//         headers: config.headers
//     })
//         .then(res => {
//             if (res.ok) {
//                 return res.json()
//             }
//             return Promise.reject(`Ошибка: ${res.status}`)
//         });
// }
