const btnMenu = document.getElementById('menu__btn');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();

  const menu = document.getElementById('menu');
  menu.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);