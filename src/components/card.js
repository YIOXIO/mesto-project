import { openImage } from './modal.js'
const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const elements = document.querySelector('.elements__cards');

const initialCards = [
    {
        name: 'Otherwise by Morcheeba',
        link: 'https://avatars.yandex.net/get-music-content/33216/936f6bc8.a.154906-1/m1000x1000?webp=false'
    },
    {
        name: 'Song of crickets by Parov Stelar',
        link: 'https://is2-ssl.mzstatic.com/image/thumb/Music69/v4/72/6f/61/726f6198-a693-8049-6ca8-ff094c2be671/cover.jpg/1200x1200bf-60.jpg'
    },
    {
        name: 'Eyesdown by Bonobo & Andreya Triana',
        link: 'https://is1-ssl.mzstatic.com/image/thumb/Music/e1/72/ef/mzi.xhjloncl.jpg/1200x1200bf-60.jpg'
    },
    {
        name: 'Web of Deception by Thievery Corporation',
        link: 'https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/aa/9f/f2/aa9ff27c-0525-8706-7b22-427b519b9db0/795103017726_Cover.jpg/1200x1200bf-60.jpg'
    },
    {
        name: 'Boomerang by Gabin',
        link: 'https://avatars.yandex.net/get-music-content/4010467/62a109c6.a.13223492-1/m1000x1000?webp=false'
    },
    {
        name: 'Stoned and Alone by Findlay',
        link: 'https://rocknfolk-cdn.respawn.fr/wp-content/uploads/2017/02/fpleasure.jpg'
    }
];


function createCard(item) {
    const card = cardTemplate.cloneNode(true);
    const cardImage = card.querySelector('.card__image')
    cardImage.src = item.link;
    cardImage.alt = item.name;
    card.querySelector('.card__name').textContent = item.name;
    card.querySelector('.card__trash').addEventListener('click', handleDeleteCard)
    card.querySelector('.card__like').addEventListener('click', handleLikeClick)
    cardImage.addEventListener('click', () => openImage(item));

    return card;
}

function renderCard(item) {
    elements.prepend(createCard(item));
};

function handleDeleteCard(evt) {
    evt.target.closest('.card').remove()
};


function handleLikeClick(evt) {
    evt.target.closest('.card__like').classList.toggle('card__like_active');
};

initialCards.forEach(renderCard)

export { renderCard }

