const cards = document.querySelectorAll('.card');

document.addEventListener('click', function (e) {
  const cardContainer = e.target;

  if (e.target.className === 'card') {
    for (let i = 0; i < cards.length; i++) {
      cards[i].classList.remove('expanded');
    }

    cardContainer.classList.add('expanded');
  }
});
