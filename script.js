let minus = document.querySelectorAll('.card__trash');
minus.forEach((elem) => {
    elem.addEventListener('click', removeParent);
});
function removeParent() {
    let revDiv = this.parentElement;
    revDiv.remove();
}

