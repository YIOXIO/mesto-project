const cardTemplate = document.querySelector('.card-template').content.querySelector('.card');
const elements = document.querySelector('.elements__cards');

const cards = (data) => {
    const card = cardTemplate.cloneNode(true);
    card.querySelector(".card__image").src = data.link;
    card.querySelector(".card__name").textContent = data.name;
    card.querySelector(".card__trash");
    card.querySelector(".card__like");

    return card;
}


const render = (data) => {
    elements.prepend(cards(data));
};

initialCards.forEach((data) => {
    render(data);
})
